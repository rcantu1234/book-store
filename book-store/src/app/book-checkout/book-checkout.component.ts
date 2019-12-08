import { by } from 'protractor';
import { BookComponent } from './../book/book.component';
import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-checkout',
  templateUrl: './book-checkout.component.html',
  styleUrls: ['./book-checkout.component.css']
})
export class BookCheckoutComponent implements OnInit {

  bookComponent: BookComponent;

  book: any;
  // sum = 0;
  @Input() receivedTotal;
  // tslint:disable-next-line: no-input-rename
  // @Input('book') bookObj: Book;

  constructor() { }
  // books: Book[] = [];
  ngOnInit() {
    // this.book = {
      // id: this.bookObj.id,
      // avatar: this.bookObj.avatar,
      // title: this.bookObj.title,
      // author: this.bookObj.author,
      // price: this.bookObj.price,
      // url: this.bookObj.url,
      // total: this.bookObj.total

      // this.books.push(new Book('TEST1', 'JOHN DOE');

      // this.books.push(new Book('TEST2', 'JANE DOE');
    // };
  }

  // onPurchaseBook() {
  //   this.sum = total;
  //   return this.sum;
  //   console.log(this.sum);
  // }


}
