import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import 'hammerjs';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BookComponent } from './book/book.component';
import { BookService } from './book.service';
import { AddBookComponent } from './add-book/add-book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CatInTheHatComponent } from './cat-in-the-hat/cat-in-the-hat.component';
import { VanHalenComponent } from './van-halen/van-halen.component';
import { SupermanComponent } from './superman/superman.component';
import { BookCheckoutComponent } from './book-checkout/book-checkout.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    BookComponent,
    AddBookComponent,
    BookDetailsComponent,
    CatInTheHatComponent,
    VanHalenComponent,
    SupermanComponent,
    BookCheckoutComponent,

    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
