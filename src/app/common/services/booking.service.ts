import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from  "rxjs/operators";
import { booking } from '../models/booking-model';


@Injectable({
  providedIn: 'root'
})

export class BookingService {

  public service: HttpClient;

  constructor(public param_service: HttpClient) { 
    this.service = param_service;
}
public getBoockingForm(): Observable<booking>{
  const  obs1:Observable<any> = this.service.get("http://open-reza.herokuapp.com/api/bookings/5cadddf64170bf000fdb8315");
  const  treatment  = ( param_data:any) => {
      return  param_data as booking;
  };
  return  obs1.pipe( map( treatment) );
}
}
