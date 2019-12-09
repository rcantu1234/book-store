import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './models/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  // GET() to retrieve all of the books from the database or assets folder.
  getAllBooks(): Observable<any> {
    // return this.http.get('http://localhost:8080/bookservice/books');
    return this.http.get('assets/books.json');
  }

  // POST() to save a book from add.componenet.html
  addBook(book: Book): Observable<any> {
    return this.http.post('http://localhost:8080/bookservice/book', book, {
      responseType: 'text'
    });
  }
}
