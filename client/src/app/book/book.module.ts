import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookManagerComponent } from './book-manager/book-manager.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookService } from './book.service';
import { BookRouteModule } from './book-route.module';
import { ThreedBookComponent } from './threed-book/threed-book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  imports: [
    CommonModule,
    BookRouteModule
  ],
  declarations:
  [
    BookManagerComponent,
    BookDetailsComponent,
    ThreedBookComponent,
    BookDetailComponent
  ],
  providers: [BookService]
})
export class BookModule { }
