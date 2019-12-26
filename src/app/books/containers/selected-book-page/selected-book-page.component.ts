import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../state/book.model';
import { BooksQuery } from '../../state/books.query';
import { BooksService } from '../../state/books.service';

@Component({
  selector: 'app-selected-book-page',
  templateUrl: './selected-book-page.component.html',
  styleUrls: ['./selected-book-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedBookPageComponent {

  book$: Observable<Book | Book[]>;
  isSelectedBookInCollection$: Observable<boolean>;

  constructor(private booksQuery: BooksQuery,
    private booksService: BooksService) {

    this.book$ = this.booksQuery.selectActive();
    this.isSelectedBookInCollection$ = this.booksQuery.isInCollection$;
  }

  updateCollection({ id }: Book) {
    this.booksService.updateCollection(id);
  }
}
