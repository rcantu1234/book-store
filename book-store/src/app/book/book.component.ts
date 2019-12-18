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
  // @Input()
  books: Book[] = [];
  // bookArray: [];
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
  // ngOnInit() {
  //   this.service.getAllBooks().subscribe(data => this.books = data);
  // }

  ngOnInit() {
    this.service.getAllBooks().subscribe(data => this.books = data);
    this.id = 0;
    this.avatar = '';
    this.author = '';
    this.title = '';
    this.price = 0;
    this.url = '';
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
    // console.log(this.id + ' ' + this.avatar + ' ' + this.total + ' '
    // + this.id + ' ' + this.author + ' ' + this.title);
    const id = JSON.stringify(this.id);
    const price = JSON.stringify(this.price);
    const total = JSON.stringify(this.total);
    localStorage.setItem('total', total);
    localStorage.setItem('id', id);
    localStorage.setItem('title', this.title);
    localStorage.setItem('author', this.author);
    localStorage.setItem('price', price);
    console.log('Setting total : ' + total);

    // localStorage.removeItem('showList');
    // let showList = [];
    // const show = {
    //   id: this.id,
    //   title: this.title,
    //   author: this.author,
    //   price: this.price
    // };
    // showList.push(show);
    // showList = showList.concat(JSON.parse(localStorage.getItem('showList')||'[]'));
    // console.log('TESTING ' + showList);
    // localStorage.setItem('showList', JSON.stringify(showList));
  }



//   search() {
//     this.books = this.books.filter(res => {
//       return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
//     });
//  }


search() {
  if (this.title !== '') {
    this.books = this.books.filter(res => {
      return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
    });
  } else {
    this.ngOnInit();
  }
}

}












// import { Component, OnInit, Input } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { BookService } from '../book.service';
// import { Book } from '../models/book';
// @Component({
//   selector: 'app-book',
//   templateUrl: './book.component.html',
//   styleUrls: ['./book.component.css']
// })
// export class BookComponent implements OnInit {
//   // @Input()
//   books: Book[] = [];
//   // total used for local
//   total = 0;
//   book: Book;
//   id: number;
//   avatar: string;
//   author: string;
//   title: string;
//   price: number;
//   url: string;
//   selectedBook: Book;
//   constructor(private service: BookService) {
//   }
//   ngOnInit() {
//     this.service.getAllBooks().subscribe(data => this.books = data);
//   }
//   onSelectBook(book: Book): void {
//     this.selectedBook = book;
//   }
//   onPurchaseBook(book: Book) {
//     this.total = this.total + book.price;
//     this.id = book.id;
//     this.avatar = book.avatar;
//     this.author = book.author;
//     this.title = book.title;
//     this.price = book.price;
//     this.url = book.url;
//     console.log(this.id + ' ' + this.avatar + ' ' + this.total + ' '
//     + this.id + ' ' + this.author + ' ' + this.title);
//     const id = JSON.stringify(this.id);
//     const price = JSON.stringify(this.price);
//     const total = JSON.stringify(this.total);
//     localStorage.setItem('total', total);
//     localStorage.setItem('id', id);
//     localStorage.setItem('title', this.title);
//     localStorage.setItem('author', this.author);
//     localStorage.setItem('price', price);
//     console.log('Setting total : ' + total);
//   }
//   search() {
//     this.books = this.books.filter(res => {
//       return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
//     });
//  }
// }


// import { Component, OnInit, Input } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { BookService } from '../book.service';
// import { Book } from '../models/book';
// @Component({
//   selector: 'app-book',
//   templateUrl: './book.component.html',
//   styleUrls: ['./book.component.css']
// })
// export class BookComponent implements OnInit {
//   // @Input()
//   books: Book[] = [];
//   // total used for local
//   total = 0;
//   book: Book;
//   id: number;
//   avatar: string;
//   author: string;
//   title: string;
//   price: number;
//   url: string;
//   selectedBook: Book;
//   constructor(private service: BookService) {
//   }
//   ngOnInit() {
//     this.service.getAllBooks().subscribe(data => this.books = data);
//   }
//   onSelectBook(book: Book): void {
//     this.selectedBook = book;
//   }
//   onPurchaseBook(book: Book) {
//     this.total = this.total + book.price;
//     this.id = book.id;
//     this.avatar = book.avatar;
//     this.author = book.author;
//     this.title = book.title;
//     this.price = book.price;
//     this.url = book.url;
//     console.log(this.id + ' ' + this.avatar + ' ' + this.total + ' '
//     + this.id + ' ' + this.author + ' ' + this.title);
//     const id = JSON.stringify(this.id);
//     const price = JSON.stringify(this.price);
//     const total = JSON.stringify(this.total);
//     localStorage.setItem('total', total);
//     localStorage.setItem('id', id);
//     localStorage.setItem('title', this.title);
//     localStorage.setItem('author', this.author);
//     localStorage.setItem('price', price);
//     console.log('Setting total : ' + total);
//   }
//   search() {
//     this.books = this.books.filter(res => {
//       return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
//     });
//  }
// }














// // import { Component, OnInit, Input } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';
// // import { BookService } from '../book.service';
// // import { Book } from '../models/book';

// // @Component({
// //   selector: 'app-book',
// //   templateUrl: './book.component.html',
// //   styleUrls: ['./book.component.css']
// // })
// // export class BookComponent implements OnInit {
// //   books: any;

// //   // total used for local
// //   total = 0;

// //   book: Book;

// //   title: string;

// //   selectedBook: Book;

// //   constructor(private service: BookService) {
// //   }

// //   ngOnInit() {
// //     this.service.getAllBooks().subscribe(data => this.books = data);
// //   }

// //   onSelectBook(book: Book): void {
// //     this.selectedBook = book;
// //   }

// //   onPurchaseBook(book: Book) {
// //     this.total = this.total + book.price;
// //     console.log(this.total);
// //     //this.books.push(book);
// //   }

// //   search() {
// //     if (this.title !== '') {
// //       this.books = this.books.filter(res => {
// //         return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
// //       });
// //     } else {
// //       this.ngOnInit();
// //     }
// //   }
// // }

// // // if(this.title != “”) {
// // // } else {
// // // 	this.books = books;
// // // }
