import { BookService } from './../book.service';
import { BookComponent } from './../book/book.component';
import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-book-checkout',
  templateUrl: './book-checkout.component.html',
  styleUrls: ['./book-checkout.component.css']
})
export class BookCheckoutComponent implements OnInit {

  bookComponent: BookComponent;

  book: any;

  books: Book[] = [];

  // selectedBook: Book()
  selectedBook: Book;

  @Input() receivedTotal;

  // @Input() public id: number;
  // @Input() public author: string;
  // @Input() public title: string;
  // @Input() public price: number;

  constructor(private service: BookService) { }

  ngOnInit() {
  }

  // @Input()
  // onPurchaseBook(book: Book) {
  //  return this.books.push(book);
  // }


}
