import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../state/book.model';

@Component({
  selector: 'app-book-authors',
  templateUrl: './book-authors.component.html',
  styleUrls: ['./book-authors.component.scss']
})
export class BookAuthorsComponent implements OnInit {

  @Input() book: Book;

  get authors() {
    return this.book.volumeInfo.authors;
  }

  constructor() { }

  ngOnInit() {
  }
}
