import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../Models/book';

@Injectable()
export class BookService {
baseUrl: string = environment.baseUrl;
constructor(private httpClient: HttpClient) { }

getBooks(): Observable<Book[]>
{
  return this.httpClient.get<Book[]>(this.baseUrl + 'books');
}

}
