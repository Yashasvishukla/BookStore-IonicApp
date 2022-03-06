import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Book } from 'src/app/models/books';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private bookService: BooksService, private loadingController: LoadingController) { 
  }

  bookId: string;
  loadedBook: Book;
  async ngOnInit() {
    this.activatedRoute.data.subscribe((book: Book) => {
      this.loadedBook = book['book'];
    })
  }
}
