import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookAuthorsComponent } from '../components/book-authors/book-authors.component';
import { BookDetailComponent } from '../components/book-detail/book-detail.component';
import { BookPreviewListComponent } from '../components/book-preview-list/book-preview-list.component';
import { BookPreviewComponent } from '../components/book-preview/book-preview.component';
import { BookSearchComponent } from '../components/book-search/book-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../styling/material/material.module';
import { RouterModule } from '@angular/router';
import { PipesModule } from 'src/app/core/pipes/pipes.module';

const COMPONENTS = [
  BookAuthorsComponent,
  BookDetailComponent,
  BookPreviewListComponent,
  BookPreviewComponent,
  BookSearchComponent
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    PipesModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class BooksComponentModule { }
