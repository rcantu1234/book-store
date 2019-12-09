import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-cat-in-the-hat',
  templateUrl: './cat-in-the-hat.component.html',
  styleUrls: ['./cat-in-the-hat.component.css']
})
export class CatInTheHatComponent implements OnInit {

  @Input() total;
  // total = 0;

  book: Book;

  constructor() { }

  ngOnInit() {
  }

  // onPurchaseBook(book: Book) {
  //   this.total = this.total + book.price;
  //   console.log(this.total);
  // }
}
