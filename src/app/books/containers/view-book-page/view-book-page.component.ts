import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../state/books.service';

@Component({
  selector: 'app-view-book-page',
  templateUrl: './view-book-page.component.html',
  styleUrls: ['./view-book-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewBookPageComponent implements OnInit {

  constructor(
    private bookService: BooksService, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    const activeBookId = this.route.snapshot.paramMap.get('id');
    this.bookService.setActive(activeBookId);
  }

}
