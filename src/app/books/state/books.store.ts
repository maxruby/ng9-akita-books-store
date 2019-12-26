import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ID } from '@datorama/akita';
import { Book } from './book.model';

export interface BooksState extends EntityState<Book> {
  searchTerm: string;
  resultIds: ID[];
  collection: ID[];
}

const initialState = {
  searchTerm: '',
  resultIds: [],
  loading: false,
  collection: JSON.parse(localStorage.getItem('collection') as string) || []
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'books' })
export class BooksStore extends EntityStore<BooksState, Book> {

  constructor() {
    super(initialState);
  }

  updateSearchTerm(searchTerm: string) {
    this.update({ searchTerm });
  }

  updateResultIds(resultIds: ID[]) {
    this.update({ resultIds });
  }

  updateCollection(id: ID) {
    this.update(state => ({ collection: this.toggleActive(state.collection.filter(_id => _id == id)) }));
  }
}

