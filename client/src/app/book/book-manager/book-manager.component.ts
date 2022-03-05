import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/Models/book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-manager',
  templateUrl: './book-manager.component.html',
  styleUrls: ['./book-manager.component.css']
})
export class BookManagerComponent implements OnInit {
  books$: Observable<Book[]> | undefined;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void{
    this.books$ = this.bookService.getBooks();
  }

}
