import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BooksPage } from './books-detail/books.page';

const routes: Routes = [
  {
    path: '',
    component: BooksPage
  },
  {
    path: ":bookId",
    component: BookDetailComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksPageRoutingModule {}
