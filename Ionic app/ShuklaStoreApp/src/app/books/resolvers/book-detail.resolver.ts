import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { LoadingController } from "@ionic/angular";
import { Observable } from "rxjs";
import { Book } from "src/app/models/books";
import { BooksService } from "../books.service";

@Injectable()

export class BookDetailResolver implements Resolve<Observable<Book>> {
    /**
     *
     */
    bookId: string;
    constructor(private bookService: BooksService, private loadingController: LoadingController) {}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book> {
        this.Loading();
        this.bookId = route.paramMap.get('bookId');
        return this.bookService.getBook(this.bookId);
    }

    async Loading()
  {
    const loading = await this.loadingController.create({

      message : "Fetching Book Content. Please Wait!",
      translucent: true,
      backdropDismiss: true,
      spinner: "lines-sharp",
      duration: 2000
    });
    await loading.present();
  }

}