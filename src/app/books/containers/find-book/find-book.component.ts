import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, skip, debounceTime, filter } from 'rxjs/operators';
import { Book } from '../../state/book.model';
import { BooksQuery } from '../../state/books.query';
import { BooksService } from '../../state/books.service';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-find-book',
  templateUrl: './find-book.component.html',
  styleUrls: ['./find-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FindBookComponent implements OnDestroy {

  searchQuery: string;
  books$: Observable<Book[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;
  changedSearchTerm: boolean;

  constructor(private booksQuery: BooksQuery, private booksService: BooksService) {
      
    this.searchQuery = this.booksQuery.getSearchTerm;
    this.loading$ = this.booksQuery.selectLoading();

    this.booksQuery.selectSearchTerm$.pipe(skip(1), filter(Boolean), debounceTime(300), untilDestroyed(this)).subscribe((searchTerm: string) => {
      this.booksService.searchBooks(searchTerm);
    });

    this.books$ = this.booksQuery.selectResultIds$.pipe(
      switchMap(ids => this.booksQuery.selectMany(ids))
    );
  }

  search(query: string) {
    const newSearchTerm = query !== this.booksQuery.getSearchTerm;
    this.booksService.updateSearchTerm(query, newSearchTerm);
  }

  onScrolled() {
    this.booksService.updatePage('DOWN');
    this.booksService.searchBooks(this.booksQuery.getSearchTerm);
  }

  onScrolledUp() {
    this.booksService.updatePage('UP');
    this.booksService.searchBooks(this.booksQuery.getSearchTerm);
  }

  ngOnDestroy() { }
}
