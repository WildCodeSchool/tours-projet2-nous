import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from  "rxjs/operators";


@Injectable({
  providedIn: 'root'
})

export class BookingService {

  public service: HttpClient;

  constructor(public param_service: HttpClient) { 
    this.service = param_service;
}
public getBoockingForm(): Observable<string>{
  const  obs1:Observable<any> = this.service.get("http://open-reza.herokuapp.com:80/api/bookings/");
  const  treatment  = ( param_data:any) => {
      return  param_data;
  };
  return  obs1.pipe( map( treatment) );
}
}
