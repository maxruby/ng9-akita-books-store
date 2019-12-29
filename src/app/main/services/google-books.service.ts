import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Book } from '../../books/state/book.model';
import { ID } from '@datorama/akita';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {

  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  searchBooks(queryTitle: ID): Observable<Book[]> {
    const perPage = 10;
    const startPage = 1;
    // const offset = (startPage - 1) * perPage;
    // const paginatedItems = data.slice(offset, offset + perPage);
    // const hasMore = offset + perPage !== data.length;

    return this.http
      .get<{ items: Book[] }>(`${this.API_PATH}?q=${queryTitle}&maxResults=${perPage}&startIndex=${startPage}`)
      .pipe(map(books => books.items || []));
  }

  // getData(params = { page: 1 }) {
  //   const perPage = 10;
  //   const offset = (params.page - 1) * perPage;
  //   const paginatedItems = data.slice(offset, offset + perPage);
  //   const hasMore = offset + perPage !== data.length;
  
  //   return {
  //     currentPage: params.page,
  //     hasMore,
  //     perPage: perPage,
  //     total: data.length,
  //     lastPage: Math.ceil(data.length / perPage),
  //     data: paginatedItems
  //   };
  // }
  
  retrieveBook(volumeId: ID): Observable<Book> {
    return this.http.get<Book>(`${this.API_PATH}/${volumeId}`);
  }
}
