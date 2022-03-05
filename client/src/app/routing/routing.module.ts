import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadAllModules, Route, RouterModule } from '@angular/router';
import { BookManagerComponent } from '../book/book-manager/book-manager.component';

const routes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'book',
    loadChildren: () => import('../book/book.module').then((m) => m.BookModule),
  },
  {
    path: 'upload',
    loadChildren: () => import('../upload/upload.module').then((m) => m.UploadModule),
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      paramsInheritanceStrategy: 'always',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class RoutingModule {}
