import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { catchError } from 'rxjs/operators';
import { BookService } from '../book.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  temp: Order = new Order();
  error: string;
  constructor(private service: BookService) {
  }
  ngOnInit() {
  }
  saveOrder() {
    this.service.saveOrder(this.temp)
    .pipe(
      catchError((err, caught) => {
        console.log(err);
        this.error = err.messages;
        return [];
      })
    )
    .subscribe((response) => {
      console.log('TESTING');
      alert('You order has been placed!!!');
      console.log(response);
      this.temp = new Order();
    }, (error) => {
      console.log(error);
    });
  }
  onCancel() {
    this.temp.fullName = '';
    this.temp.streetAddress1 = '';
    this.temp.streetAddress2 = '';
    this.temp.city = '';
    this.temp.state = '';
    this.temp.cardNumber = '';
    this.temp.month = '';
    this.temp.year = '';
    this.temp.ccv = '';
    this.temp.nameOnCard = '';
  }
}
