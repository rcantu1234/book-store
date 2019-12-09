import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: any;

  // total used for local
  total = 0;

  book: Book;

  selectedBook: Book;

  constructor(private service: BookService) {
  }

  ngOnInit() {
    this.service.getAllBooks().subscribe(data => this.books = data);
  }

  onSelectBook(book: Book): void {
    this.selectedBook = book;
  }

  onPurchaseBook(book: Book) {
    this.total = this.total + book.price;
    console.log(this.total);
    // this.books.push(book);
  }
}
