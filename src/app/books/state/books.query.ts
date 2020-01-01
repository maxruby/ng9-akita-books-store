import { Injectable } from '@angular/core';
import { QueryEntity, ID } from '@datorama/akita';
import { BooksStore, BooksState } from './books.store';
import { Book } from './book.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BooksQuery extends QueryEntity<BooksState, Book> {

  constructor(protected store: BooksStore) {
    super(store);
  }

  selectSearchTerm$ = this.select(state => state.searchTerm || '');
  selectResultIds$ = this.select(state => state.resultIds || []);
  selectCollection$ = this.select(state => state.collection || []);

  isInCollection$ = this.selectCollection$.pipe(map(ids => ids.includes(this.getActiveId()) === true));

  get getSearchTerm(): string {
    return this.getValue().searchTerm;
  }
  
  get collection(): ID[] {
    return this.getValue().collection;
  }

  get nonCollectionBooks(): string[] {
    return this.getAll({
      filterBy: ({ id }) => this.collection.includes(id) === false})
        .map(({ id }) => id);
  }

  get hasMore(): boolean {
    return this.getValue().hasMore;
  }

  get currentPage(): number {
    return this.getValue().page;
  }

  get totalBooksCount(): number {
    return this.getValue().totalItems;
  }
}
