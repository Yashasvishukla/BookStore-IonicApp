import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookManagerComponent } from './book-manager/book-manager.component';

const subRoutes: Route[] = [
  {path: '', component: BookManagerComponent},
  {path: ':id', component: BookDetailComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(subRoutes)
  ],
  declarations: [],
  exports : [RouterModule]
})
export class BookRouteModule { }
