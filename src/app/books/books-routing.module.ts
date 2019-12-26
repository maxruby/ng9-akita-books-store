import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindBookComponent } from './containers/find-book/find-book.component';
import { ViewBookPageComponent } from './containers/view-book-page/view-book-page.component';
import { BooksGuard } from './books.guard';
import { CollectionPageComponent } from './containers/collection-page/collection-page.component';

const routes: Routes = [
  { path: 'find', component: FindBookComponent },
  {
    path: ':id',
    component: ViewBookPageComponent,
    canActivate: [BooksGuard],
  },
  { path: '', component: CollectionPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
