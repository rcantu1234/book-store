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
  id: number;
  avatar: string;
  author: string;
  title: string;
  price: number;
  url: string;
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
    this.id = book.id;
    this.avatar = book.avatar;
    this.author = book.author;
    this.title = book.title;
    this.price = book.price;
    this.url = book.url;
    console.log(this.id + ' ' + this.avatar + ' ' + this.total + ' '
    + this.id + ' ' + this.author + ' ' + this.title);
    // this.books.push(book);
  }
}
