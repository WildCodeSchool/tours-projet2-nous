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

  constructor(public http: HttpClient) {
    this.service = http;
  }
  public getBoockingForm(id:string): Observable<Booking> {
    const  obs1:Observable<any> = this.service
    .get(`http://open-reza.herokuapp.com/api/bookings/${id}`);
    const  treatment  = (response:any) => {
      return  response as Booking;
    };
    return  obs1.pipe(map(treatment));
  }

  public create (form:Booking) {
    const  obs2:Observable<any> = this.service
    .post('http://open-reza.herokuapp.com/api/bookings', form);
    const  treatment  = (response:any) => {
      return  response as Booking;
    };
    return  obs2.pipe(map(treatment));
  }

  public update (form:Booking, id:string) {
    const  obs3:Observable<any> = this.service
    .put(`http://open-reza.herokuapp.com/api/bookings/${id}`, form);
    const  treatment  = (response:any) => {
      return  response as Booking;
    };
    return  obs3.pipe(map(treatment));
  }

  public getListBooking() {
    const  obs1:Observable<any> = this.service
    .get('http://open-reza.herokuapp.com/api/establishments/5cadde114170bf000fdb83a9/bookings');
    const  treatment  = (response:any) => {
      return  response as Booking;
    };
    return  obs1.pipe(map(treatment));
  }

  del(id) {
    this.service.delete(`http://open-reza.herokuapp.com/api/bookings/${id}`)
        .subscribe(
            (val) => {
              console.log('DELETE call successful value returned in body',
                          val);
            },
            (response) => {
              console.log('DELETE call in error', response);
            },
            () => {
              console.log('The DELETE observable is now completed.');
            });
  }
}
