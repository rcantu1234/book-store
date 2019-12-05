import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './models/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<any> {
    // return this.http.get('http://localhost:8080/bookservice/findAllBooks');
    return this.http.get('assets/books.json');
  }

  addBook(book: Book): Observable<any> {
    // return this.http.post('http://localhost:8080/bookservice/addBook', book);
    return this.http.post('http://localhost:8080/bookservice/api/book', book, {
      responseType: 'text'
    });
  }
}
