import { Component, OnInit } from '@angular/core';
import { Booking } from '../common/models/booking-model';
import { BookingService } from '../common/services/booking.service';
import { JsonPipe } from '@angular/common';
import { CurrencyIndex } from '@angular/common/src/i18n/locale_data';
import { findIndex } from 'rxjs/operators';
import { EstablishmentService } from '../common/services/establishment.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-liste-booking',
  templateUrl: './liste-booking.component.html',
  styleUrls: ['./liste-booking.component.css'],
})
export class ListeBookingComponent implements OnInit {

  public bookings: Booking[];
  public tableLists = [];


  constructor(public service:BookingService, public serv:EstablishmentService,
              public activatedRoute:ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      const etablissement = params.get('etablissement');
      this.service.getListBooking(etablissement).subscribe(
          (booking) => {
            this.bookings  =  booking;
          });
    });
  }

  delete(id, index) {
    this.service.deleteBooking(id).subscribe(
      (bookings) => {
        this.bookings.splice(index , 1);
      });
  }
  
}
