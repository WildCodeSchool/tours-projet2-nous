import { Component, OnInit } from '@angular/core';
import { Booking } from '../common/models/booking-model';
import { BookingService } from '../common/services/booking.service';
import { JsonPipe } from '@angular/common';
import { CurrencyIndex } from '@angular/common/src/i18n/locale_data';
import { findIndex } from 'rxjs/operators';

@Component({
  selector: 'app-liste-booking',
  templateUrl: './liste-booking.component.html',
  styleUrls: ['./liste-booking.component.css'],
})
export class ListeBookingComponent implements OnInit {

  public listBooking;
  public tableLists = [];

  constructor(public service:BookingService) {}

  ngOnInit() {
    this.service.getListBooking().subscribe(
          (booking) => {
            this.listBooking  =  booking;
            this.tableLists = this.listBooking;
          });
  }

  del(id, i) {
    this.service.del(id, i).subscribe(
      (val) => {
        console.log('DELETE call successful value returned in body',
                    val);
        this.tableLists.splice(i , 1);
      },
      (response) => {
        console.log('DELETE call in error', response);
      },
      () => {
        console.log('The DELETE observable is now completed.');
      });
  }
}
