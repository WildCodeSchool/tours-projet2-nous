import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from  "rxjs/operators";
import { Booking } from '../models/booking-model';

@Injectable({
  providedIn: 'root'
})

export class BookingService {

  public service: HttpClient;

  constructor(public param_service: HttpClient) { 
    this.service = param_service;
}
public getBoockingForm(id:string): Observable<Booking>{
  const  obs1:Observable<any> = this.service.get(`http://open-reza.herokuapp.com/api/bookings/${id}`);
  const  treatment  = ( param_data:any) => {
      return  param_data as Booking;
  };
  return  obs1.pipe( map( treatment) );
}
}
