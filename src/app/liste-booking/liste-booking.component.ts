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
  book = this.tableLists[0];
  public id;

  constructor(public service:BookingService) {}

  ngOnInit() {
    this.service.getListBooking().subscribe(
          (booking) => {
            this.listBooking  =  booking;
            this.tableLists = this.listBooking;
            console.log(this.listBooking[2]._id);
            this.id = this.listBooking[9]._id;
          });
  }

  del() {
    this.service.del(this.id);
  }
}
