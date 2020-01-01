import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { Book } from 'src/app/books/state';
import { Volume } from '../models/volume';

@Injectable({
  providedIn: 'root' 
})
export class VolumeAdapter implements Adapter<Book> {
  adapt(volume: Volume) {
    return volume as Book;
  }
}
