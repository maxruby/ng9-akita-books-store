import { Injectable } from '@angular/core';
import { QueryEntity, SnapshotManager, ID } from '@datorama/akita';
import { BooksStore, BooksState } from './books.store';
import { Book } from './book.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BooksQuery extends QueryEntity<BooksState, Book> {

  constructor(protected store: BooksStore, private snapshotManager: SnapshotManager) {
    super(store);
  }

  selectSearchTerm$ = this.select(state => state.searchTerm);
  selectResultIds$ = this.select(state => state.resultIds);
  selectCollection$ = this.select(state => state.collection);

  isInCollection$ = this.selectCollection$.pipe(map(ids => ids.includes(this.getActiveId()) === true));

  get getSearchTerm(): ID[] {
    return this.snapshotManager.getStoresSnapshot(['searchTerm']) as Array<ID>;
  }
  
  get collection(): ID[] {
    return this.snapshotManager.getStoresSnapshot(['collection']) as Array<ID>;
  }

  get nonCollectionBooks(): string[] {
    return this.getAll({
      filterBy: ({ id }) => this.collection.includes(id) === false})
        .map(({ id }) => id);
  }
}
