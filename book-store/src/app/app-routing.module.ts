import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookComponent } from './book/book.component';
import { AddBookComponent } from './add-book/add-book.component';

const routes: Routes = [
  {
   path: 'home', component: HomeComponent
  },
  {
    path: 'book', component: BookComponent
  },
  {
    path: 'add-book', component: AddBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
