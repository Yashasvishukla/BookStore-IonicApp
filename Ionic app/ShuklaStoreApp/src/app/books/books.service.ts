import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/books';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private books: Book[] = [
    {
      _id: '0123',
      name: 'Book1',
      description: 'Description',
      price: 123,
      genre: 'Motivational',
      author: 'Yashasvi',
      addedOn: new Date(),
      rating: 5,
      pages: 100,
      pictureUrl:
        'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8&w=1000&q=80',
      buyersCount: 10,
    },
    {
      _id: '01234',
      name: 'Book2',
      description: 'Description',
      price: 123,
      genre: 'Motivational',
      author: 'Yashasvi',
      addedOn: new Date(),
      rating: 5,
      pages: 100,
      pictureUrl:
        'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8&w=1000&q=80',
      buyersCount: 10,
    },
    {
      _id: '01236',
      name: 'Book2',
      description: 'Description',
      price: 123,
      genre: 'Motivational',
      author: 'Yashasvi',
      addedOn: new Date(),
      rating: 5,
      pages: 100,
      pictureUrl:
        'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8&w=1000&q=80',
      buyersCount: 10,
    },
    {
      _id: '01235',
      name: 'Book2',
      description: 'Description',
      price: 123,
      genre: 'Motivational',
      author: 'Yashasvi',
      addedOn: new Date(),
      rating: 5,
      pages: 100,
      pictureUrl:
        'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3BlbiUyMGJvb2t8ZW58MHx8MHx8&w=1000&q=80',
      buyersCount: 10,
    }
  ];

  basePath: string;
  constructor(private httpClient: HttpClient) {
    this.basePath = environment.basePath;
  }

  getAllBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.basePath + 'books');
  }

  getBook(bookId: string): Observable<Book> {
    return this.httpClient.get<Book>(this.basePath + 'books/' + bookId);
  }
}
