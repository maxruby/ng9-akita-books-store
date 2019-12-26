import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../state/book.model';
import { BooksQuery } from '../../state/books.query';

@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CollectionPageComponent {

  books$: Observable<Book[]>;

  constructor(private bookQuery: BooksQuery) {
    this.books$ = this.bookQuery.selectMany(this.bookQuery.collection);
  }

}
