import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/books';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private bookService: BooksService) { }

  bookId: string;
  loadedBook: Book;
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      params => {
        if(!params.has('bookId'))
        {
          console.log("Not Present");
            // return to home page
            return;
        }
        console.log(this.bookId);
        this.bookId = params.get('bookId');
        this.loadedBook = this.bookService.getBook(this.bookId);
      }
    );
  }

}
