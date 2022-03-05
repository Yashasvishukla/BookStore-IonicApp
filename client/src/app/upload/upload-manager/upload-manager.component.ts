import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UploadBook } from 'src/app/Models/uploadBook';
import { UploadService } from '../Services/upload.service';
import { UploadValidator } from '../Validators/upload.validators';

@Component({
  selector: 'app-upload-manager',
  templateUrl: './upload-manager.component.html',
  styleUrls: ['./upload-manager.component.css'],
})
export class UploadManagerComponent implements OnInit {

  @ViewChild('toast')
  toastElement!: ElementRef;



  form = new FormGroup({
    nameOfBook: new FormControl('', [
      UploadValidator.cannotBeNull,
      UploadValidator.cannotContainsSpecialCharacters,
    ]),
    description: new FormControl('', [Validators.required]),
    author: new FormControl('', [
      Validators.required,
      UploadValidator.cannotContainsSpecialCharacters,
    ]),
    genre: new FormControl('', [Validators.required]),
    pictureUrl: new FormControl(''),
    pages: new FormControl('', [Validators.required, Validators.min(1)]),
  });

  get nameOfBook(): AbstractControl | null {
    return this.form.get('nameOfBook');
  }
  get pictureUrl(): AbstractControl | null {
    return this.form.get('pictureUrl');
  }
  get genre(): AbstractControl | null {
    return this.form.get('genre');
  }
  get author(): AbstractControl | null {
    return this.form.get('author');
  }
  get description(): AbstractControl | null {
    return this.form.get('description');
  }
  get pages(): AbstractControl | null {
    return this.form.get('pages');
  }
  constructor(private uploadService: UploadService, private router: Router) {}

  ngOnInit(): void {}

  submit(value: any): void {
    const Book = new UploadBook();
    Book.name = value.nameOfBook;
    Book.author = value.author;
    Book.description = value.description;
    Book.genre = value.genre;
    Book.pictureUrl = value.pictureUrl;
    Book.price = value.price;
    Book.pages = value.pages;

    this.uploadService.uploadBook(Book).subscribe(
      (res) => {
        this.router.navigate(['/book/', res._id]);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('Operation Completed');
      }
    );
  }
}
