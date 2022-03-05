import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeManagerComponent } from './home-manager/home-manager.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    component: HomeManagerComponent 
  }
];

@NgModule({
  declarations: [HomeManagerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class HomeModule {}
