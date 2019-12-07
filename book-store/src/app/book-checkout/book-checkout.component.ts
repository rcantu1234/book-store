// import { by } from 'protractor';
import { BookComponent } from './../book/book.component';
import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-checkout',
  templateUrl: './book-checkout.component.html',
  styleUrls: ['./book-checkout.component.css']
})
export class BookCheckoutComponent implements OnInit {

  // bookComponent: BookComponent;

// VERY IMPORTANT TO SET BACK IF OBJECT DOESN'T WORK!!!!!!!!!
 @Input() receivedTotal: number;

book: Book;
// tslint:disable-next-line: no-input-rename
@Input('book') bookObj: Book;


  // sum = 0;

  constructor() { }

  ngOnInit() {
    // this.book = {
    //   id: this.bookObj.id,
    //   avatar: this.bookObj.avatar,
    //   title: this.bookObj.title,
    //   author: this.bookObj.author
    // }
  }

  // onPurchaseBook() {
  //   this.sum = total;
  //   return this.sum;
  //   console.log(this.sum);
  // }


}
