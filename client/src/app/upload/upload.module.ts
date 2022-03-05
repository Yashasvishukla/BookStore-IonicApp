import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadManagerComponent } from './upload-manager/upload-manager.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Route[] = [
  {
    path: '', component: UploadManagerComponent
  }
];



@NgModule({
  declarations: [
    UploadManagerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class UploadModule { }
