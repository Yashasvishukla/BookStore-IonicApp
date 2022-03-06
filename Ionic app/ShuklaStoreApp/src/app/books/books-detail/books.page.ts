import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/books';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {
  books: Observable<Book[]>;
  constructor(private bookService: BooksService) {
   }

  ngOnInit() {
    this.books = this.bookService.getAllBooks();
  }

  buy(book: Book)
  {
    
  }
}
