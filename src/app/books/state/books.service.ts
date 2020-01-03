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

  pagination = { startIndex: 1, maxResults: PER_PAGE };
  resetPagination = false;

  constructor(
    private bookStore: BooksStore,
    private bookQuery: BooksQuery,
    private googleService: GoogleBooksService
  ) { }

  searchBooks(searchTerm: string) {
    if (!this.bookQuery.hasMore) {
       this.bookStore.updateResetPagination(true);
       return;
    }
    this.bookStore.setLoading(true);
    this.updatePaginationIndex();
    if (this.bookQuery.resetPagination) {
      this.bookStore.updateResetPagination(false);
      this.pagination.startIndex = 1;
      this.bookStore.updatePage({ hasMore: true, page: 1 });
    }
    this.googleService.searchBooks(searchTerm, this.pagination).subscribe((paginatedBooks: PaginatedBooks) => {
      this.updateBooks(paginatedBooks.books);
      this.updateItemsCount(paginatedBooks.totalItems);
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

  updateSearchTerm(searchTerm: string, resetPagination: boolean = false) {
    this.bookStore.updateResetPagination(resetPagination);
    this.bookStore.updateSearchTerm(searchTerm);
  }

  updatePage(scrollDirection: 'UP' | 'DOWN') {
    let hasMore: boolean;
    let page: number;

    if (scrollDirection === 'DOWN') {
      hasMore = this.bookQuery.currentPage * PER_PAGE < this.bookQuery.totalBooksCount;
      page = hasMore ? this.bookQuery.currentPage + 1 : this.bookQuery.currentPage;  
    }
    if (scrollDirection === 'UP') {
      hasMore = ((this.bookQuery.currentPage * PER_PAGE) - PER_PAGE) > 0;
      page = hasMore ? this.bookQuery.currentPage - 1 : this.bookQuery.currentPage;
    }
    this.bookStore.updatePage({ hasMore, page });
  }

  updateItemsCount(totalItems: number) {
    this.bookStore.updateCount(totalItems);
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

  updatePaginationIndex(): void {
    let offset = this.bookQuery.currentPage * PER_PAGE;
    this.pagination.startIndex = offset;
  }
}
