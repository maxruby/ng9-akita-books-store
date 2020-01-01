import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../../books/state/book.model';
import { ID } from '@datorama/akita';
import { VolumesService } from 'src/app/core/api/web/services';
import { Volume, Volumes } from 'src/app/core/api/web/models';
import { PaginatedBooks, VolumesAdapter } from 'src/app/core/api/web/adapters/volumes-adapter';
import { VolumeAdapter } from 'src/app/core/api/web/adapters/volume-adapter';

@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {

  constructor(
    private http: HttpClient,
    private booksVolumeService: VolumesService,
    private volumesAdapter: VolumesAdapter,
    private volumeAdapter: VolumeAdapter) { }

  searchBooks(queryTitle: ID, pagination?: { startIndex: number, maxResults: number }): Observable<PaginatedBooks> {
    return this.booksVolumeService
      .booksVolumesList({ q: 'programming', startIndex: pagination.startIndex, maxResults: pagination.maxResults })
      .pipe(map((volumes: Volumes) => this.volumesAdapter.adapt(volumes)));
  }
  
  retrieveBook(volumeId: ID): Observable<Book> {
    return this.booksVolumeService.booksVolumesGet({ volumeId: String(volumeId) })
      .pipe(map((volume: Volume) => this.volumeAdapter.adapt(volume)));
  }
}
