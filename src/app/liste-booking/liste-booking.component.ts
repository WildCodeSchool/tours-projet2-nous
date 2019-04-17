import { Component, OnInit } from '@angular/core';
import { Booking } from '../common/models/booking-model';
import { BookingService } from '../common/services/booking.service';

@Component({
  selector: 'app-liste-booking',
  templateUrl: './liste-booking.component.html',
  styleUrls: ['./liste-booking.component.css'],
})
export class ListeBookingComponent implements OnInit {

  public listBooking;
  public tableLists = [];
  book = this.tableLists[0];

  constructor(public service:BookingService) {}

  ngOnInit() {
    this.service.getListBooking().subscribe(
          (booking) => {
            this.listBooking  =  booking;
            this.tableLists = this.listBooking;
            console.log(this.listBooking);
          });
  }
}
