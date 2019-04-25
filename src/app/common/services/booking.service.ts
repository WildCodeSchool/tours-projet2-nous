import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { map } from  'rxjs/operators';
import { Booking } from '../models/booking-model';

@Injectable({
  providedIn: 'root',
})

export class BookingService {

  public service: HttpClient;
  public profile;

  constructor(public http: HttpClient) {
    this.service = http;
  }

  public getBoockingForm(id:string): Observable<Booking> {
    const  obs:Observable<any> = this.service
    .get(`http://open-reza.herokuapp.com/api/bookings/${id}`);
    const  treatment  = (response:any) => {
      return  response as Booking;
    };
    return  obs.pipe(map(treatment));
  }

  public create (form:Booking) {
    const  obs:Observable<any> = this.service
    .post('http://open-reza.herokuapp.com/api/bookings', form);
    const  treatment  = (response:any) => {
      return  response as Booking;
    };
    return  obs.pipe(map(treatment));
  }

  public update (form:Booking, id:string) {
    const  obs:Observable<any> = this.service
    .put(`http://open-reza.herokuapp.com/api/bookings/${id}`, form);
    const  treatment  = (response:any) => {
      return  response as Booking;
    };
    return  obs.pipe(map(treatment));
  }

  public getListBooking() {
    const  obs:Observable<any> = this.service
    .get('http://open-reza.herokuapp.com/api/establishments/5cadde114170bf000fdb83a9/bookings');
    const  treatment  = (response:any) => {
      return  response as Booking;
    };
    return  obs.pipe(map(treatment));
  }

  public deleteBooking(id) {
    const  obs:Observable<any> = this.service
    .delete(`http://open-reza.herokuapp.com/api/bookings/${id}`);
    const  treatment  = (response:any) => {
      return  response as Booking;
    };
    return  obs.pipe(map(treatment));
  }
}
