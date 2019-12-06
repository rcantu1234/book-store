import { by } from 'protractor';
import { BookComponent } from './../book/book.component';
import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-checkout',
  templateUrl: './book-checkout.component.html',
  styleUrls: ['./book-checkout.component.css']
})
export class BookCheckoutComponent implements OnInit {

  bookComponent: BookComponent;

  // sum = 0;

  constructor() { }

  ngOnInit() {
  }

  // onPurchaseBook() {
  //   this.sum = total;
  //   return this.sum;
  //   console.log(this.sum);
  // }


}
