import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book';
import { BookService } from './../book.service';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  temp: Book = new Book();
  error: string; 

  constructor(private service: BookService) { }

  ngOnInit() {
  }
  
  addBook() {
    this.service.addBook(this.temp)
    // .pipe(
    //   catchError((err, caught) => {
    //     console.log(err);
    //     this.error = err.messages;
    //     return [];
    //   })
    // )
    .subscribe((response) => {
      console.log(response);
      this.temp = new Book();
    }, (error) => {
      console.log(error);
    })
  }
}
