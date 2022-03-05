import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BooksPageRoutingModule } from './books-routing.module';
import { BooksPage } from './books-detail/books.page';
import { BookDetailComponent } from './book-detail/book-detail.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BooksPageRoutingModule,
  ],
  declarations: [BooksPage, BookDetailComponent]
})
export class BooksPageModule {}
