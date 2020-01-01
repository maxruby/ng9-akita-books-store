import { Injectable } from '@angular/core';
import { BooksStore } from './books.store';
import { BooksQuery } from './books.query';
import { GoogleBooksService } from 'src/app/main/services/google-books.service';
import { transaction, ID } from '@datorama/akita';
import { Book } from './book.model';
import { forkJoin } from 'rxjs';
import { PaginatedBooks } from 'src/app/core/api/web/adapters';
import { PER_PAGE } from 'src/app/core/api/web/adapters/volumes.pagination';

@Injectable({ providedIn: 'root' })
export class BooksService {
  constructor(
    private bookStore: BooksStore,
    private bookQuery: BooksQuery,
    private googleService: GoogleBooksService
  ) { }

  searchBooks(searchTerm: string) {
    this.bookStore.setLoading(true);
    let offset = this.bookQuery.currentPage * PER_PAGE;
    let pagination = { startIndex: offset, maxResults: PER_PAGE };
    if (this.bookQuery.hasMore) {
      pagination.startIndex += 1;
    }
    this.googleService.searchBooks(searchTerm, pagination).subscribe((paginatedBooks: PaginatedBooks) => {
      this.updateBooks(paginatedBooks.books);
      this.updatePage(paginatedBooks.totalItems);
    });
  }

  @transaction()
  private updateBooks(books: Book[]) {
    // const nonCollection = this.bookQuery.nonCollectionBooks;
    // this.bookStore.remove([...nonCollection]);
    this.add(books);
    this.bookStore.updateResultIds(books.map(({ id }) => id));
    this.bookStore.setLoading(false);
  }

  updateSearchTerm(searchTerm: string) {
    this.bookStore.updateSearchTerm(searchTerm);
  }

  updatePage(totalItems?: number) {
    const hasMore = this.bookQuery.currentPage * PER_PAGE < (totalItems || this.bookQuery.totalBooksCount);
    const page = hasMore ? this.bookQuery.currentPage + 1 : this.bookQuery.currentPage;
    this.bookStore.updatePage({ hasMore, page, totalItems });
  }

  setActive(id: ID) {
    this.bookStore.setActive(id);
  }

  add(books: Book[]) {
    this.bookStore.add(books);
  }

  loadBooksToStore() {
    const books$ = this.bookQuery.collection.map(id => this.googleService.retrieveBook(id));
    forkJoin(books$).subscribe((books: Book[]) => this.add(books));
  }

  updateCollection(bookId: ID) {
    this.bookStore.updateCollection(bookId);
    /** In real life, you will abstract this to service. */
    localStorage.setItem(
      'collection',
      JSON.stringify(this.bookQuery.collection)
    );
  }
}
