import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../state/book.model';

@Component({
  selector: 'app-book-preview-list',
  templateUrl: './book-preview-list.component.html',
  styleUrls: ['./book-preview-list.component.scss']
})
export class BookPreviewListComponent implements OnInit {

  @Input() books: Book[];

  constructor() { }

  ngOnInit() {
  }

}
