import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from 'src/app/Models/book';
import { UploadBook } from 'src/app/Models/uploadBook';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'     // Change it to module specific
})
export class UploadService {

  baseUrl: string = environment.baseUrl;
constructor(private httpClient: HttpClient) { }

BookNameExists(bookName: string): Observable<boolean>
{
  return this.httpClient.post<Response>(this.baseUrl + 'name/', {bookName}).pipe(
    map((response: Response) => {
      return response.status === 200 ? true : false;
    })
  );
}

 uploadBook(book: UploadBook): Observable<Book>
 {
   return this.httpClient.post<Book>(this.baseUrl + 'books', book);
 }
}
