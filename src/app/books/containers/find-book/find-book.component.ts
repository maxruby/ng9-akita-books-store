import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, skip, debounceTime, filter } from 'rxjs/operators';
import { Book } from '../state/book.model';
import { BooksQuery } from '../state/books.query';
import { BooksService } from '../state/books.service';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-find-book',
  templateUrl: './find-book.component.html',
  styleUrls: ['./find-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FindBookComponent {
  searchQuery: string;
  books$: Observable<Book[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private bookQuery: BooksQuery,
    private bookService: BooksService) {

    this.searchQuery = this.bookQuery.getSearchTerm;
    this.loading$ = this.bookQuery.selectLoading();

    this.bookQuery.selectSearchTerm$.pipe(skip(1), filter(Boolean), debounceTime(300), untilDestroyed(this)).subscribe(searchTerm => {
      this.bookService.searchBooks(searchTerm);
    });

    this.books$ = this.bookQuery.selectResultIds$.pipe(
      switchMap(ids => this.bookQuery.selectMany(ids))
    );
  }

  search(query: string) {
    this.bookService.updateSearchTerm(query);
  }
}
