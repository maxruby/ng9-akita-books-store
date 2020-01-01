import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { Book } from 'src/app/books/state';
import { Volumes } from '../models/volumes';

export class PaginatedBooks {
  constructor(
    public totalItems: number,
    public books: Book[]
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class VolumesAdapter implements Adapter<PaginatedBooks> {
    adapt(response: Volumes): PaginatedBooks {
      return (new PaginatedBooks(response.totalItems, response.items as Book[]));
    }
}
