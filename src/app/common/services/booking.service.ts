import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { map } from  'rxjs/operators';
import { Booking } from '../models/booking-model';
import { inputs } from '@syncfusion/ej2-angular-calendars/src/timepicker/timepicker.component';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})

export class BookingService {

  public service: HttpClient;

  constructor(public http: HttpClient) {
    this.service = http;
  }

  public getBoockingForm(id:string): Observable<Booking> {
    const  obs:Observable<any> = this.service
    .get(`${environment.apiUrl}/bookings/${id}`);
    const  treatment  = (response:any) => {
      return  response as Booking;
    };
    return  obs.pipe(map(treatment));
  }

  public create (form:Booking) {
    const  obs:Observable<any> = this.service
    .post(`${environment.apiUrl}/bookings`, form);
    const  treatment  = (response:any) => {
      return  response as Booking;
    };
    return  obs.pipe(map(treatment));
  }

  public update (form:Booking, id:string) {
    const  obs:Observable<any> = this.service
    .put(`${environment.apiUrl}/bookings/${id}`, form);
    const  treatment  = (response:any) => {
      return  response as Booking;
    };
    return  obs.pipe(map(treatment));
  }

  public getListBooking(id) {
    const  obs:Observable<any> = this.service
    .get(`${environment.apiUrl}/establishments/${id}/bookings`);
    const  treatment  = (response:any) => {
      return  response as Booking[];
    };
    return  obs.pipe(map(treatment));
  }

  public deleteBooking(id) {
    const  obs:Observable<any> = this.service
    .delete(`${environment.apiUrl}/bookings/${id}`);
    const  treatment  = (response:any) => {
      return  response as Booking;
    };
    return  obs.pipe(map(treatment));
  }
}
