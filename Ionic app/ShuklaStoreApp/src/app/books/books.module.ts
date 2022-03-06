import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BooksPageRoutingModule } from './books-routing.module';
import { BooksPage } from './books-detail/books.page';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { UploadComponent } from './upload/upload.component';
import { LoadingComponent } from '../Shared/loading/loading.component';
import { BookDetailResolver } from './resolvers/book-detail.resolver';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BooksPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [BooksPage, BookDetailComponent, UploadComponent, LoadingComponent],
  providers: [BookDetailResolver]
})
export class BooksPageModule {
  
}
