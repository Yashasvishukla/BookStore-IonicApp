import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/Models/book';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  constructor() { }

  @Input()
  book!: Book;
  ngOnInit(): void {
    console.log(this.book._id);
  }

}
