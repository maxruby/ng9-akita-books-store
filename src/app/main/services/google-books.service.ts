import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../../books/state/book.model';
import { ID } from '@datorama/akita';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {

  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  searchBooks(queryTitle: ID): Observable<Book[]> {
    return this.http
      .get<{ items: Book[] }>(`${this.API_PATH}?q=${queryTitle}`)
      .pipe(map(books => books.items || []));
  }

  retrieveBook(volumeId: ID): Observable<Book> {
    return this.http.get<Book>(`${this.API_PATH}/${volumeId}`);
  }
}
