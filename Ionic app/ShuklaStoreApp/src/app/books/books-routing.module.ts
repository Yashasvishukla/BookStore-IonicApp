import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BooksPage } from './books-detail/books.page';
import { BookDetailResolver } from './resolvers/book-detail.resolver';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {
    path: '',
    component: BooksPage
  },
  {
    path: 'upload',
    component: UploadComponent
  },
  {
    path: ':bookId',
    component: BookDetailComponent,
    resolve : { "book" : BookDetailResolver }
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksPageRoutingModule {}
