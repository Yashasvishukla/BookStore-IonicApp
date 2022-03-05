import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  bookId: string | null = null;
  constructor(private route: ActivatedRoute)
  { 
    this.route.paramMap.subscribe(params => {
      this.bookId = params.get('id');
    });
  }

  ngOnInit() {
  }

}
