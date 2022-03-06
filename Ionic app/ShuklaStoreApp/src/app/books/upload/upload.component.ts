import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/books';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  bookForm: FormGroup;

  book: Observable<Book>;

  constructor(private formBuilder: FormBuilder, private bookService: BooksService, private router: Router) {
    this.bookForm = formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: ['',[Validators.required, Validators.min(1)]],
      genre: ['',[Validators.required]],
      author: ['', [Validators.required]],
      pictureUrl: ['',],
      pages: ['', [Validators.required]]

    });
   }

   get name()
   {
     return this.bookForm.get('name');
   }
   get description()
   {
     return this.bookForm.get('description');
   }

   get price()
   {
     return this.bookForm.get('price');
   }

   get genre()
   {
     return this.bookForm.get('genre');
   }

   get author()
   {
     return this.bookForm.get('author');
   }
   
   get pictureUrl()
   {
     return this.bookForm.get('pictureUrl');
   }

   get pages()
   {
     return this.bookForm.get('pages');
   }


  

  ngOnInit() {
    
  }

  upload(formValues: any)
  {
    this.bookService.uploadBook(formValues).subscribe((book: Book) => {
      if(book!=null)
      {
        this.router.navigate(['books/',""+book._id]);
      }
    });
  }

}
