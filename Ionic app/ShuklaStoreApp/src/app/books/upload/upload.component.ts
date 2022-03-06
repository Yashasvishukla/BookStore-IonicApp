import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  bookForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
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

}
