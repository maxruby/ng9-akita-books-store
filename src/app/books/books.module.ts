import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponentModule } from './components/books-components.module';
import { MaterialModule } from '../styling/material';
import { BooksGuard } from '../books/books.guard';
import { CollectionPageComponent } from './containers/collection-page/collection-page.component';
import { FindBookComponent } from './containers/find-book/find-book.component';
import { SelectedBookPageComponent } from './containers/selected-book-page/selected-book-page.component';
import { ViewBookPageComponent } from './containers/view-book-page/view-book-page.component';

@NgModule({
  declarations: [ 
  CollectionPageComponent,
  FindBookComponent,
  SelectedBookPageComponent,
  ViewBookPageComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    BooksComponentModule,
    MaterialModule
  ],
  providers: [ BooksGuard ]
})
export class BooksModule { }
