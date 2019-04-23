import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Establishment } from '../models/establishment.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',

})
export class EstablishmentService {

  public service: HttpClient;

  constructor(public http: HttpClient) {}

  public getEstablishment(id: string): Observable<Establishment> {
    const obs1: Observable<any> = this.http.get(
      `http://open-reza.herokuapp.com/api/establishments/${ id }`,
    );
    const treatment = (response: any) => {
      return response as Establishment;
    };
    return obs1.pipe(map(treatment));
  }
  public update(id: string, myForm: Establishment) {
    const obs2: Observable<any> = this.http.put(
      `http://open-reza.herokuapp.com/api/establishments/${id}`, myForm);
    const treatment = (response: any) => {
      return response as Establishment;
    };
    return obs2.pipe(map(treatment));
  }
  public create(myForm: Establishment) {
    const obs3: Observable<any> = this.http.post(
      'http://open-reza.herokuapp.com/api/establishments/', myForm);
    const treatment = (response: any) => {
      return response as Establishment;
    };
    return obs3.pipe(map(treatment));
  }
  public getListEstablishment() {
    const obs4: Observable<any> = this.http.get(
      'http://open-reza.herokuapp.com/api/establishments',
    );
    const treatment = (response: any) => {
      return response as Establishment;
    };
    return obs4.pipe(map(treatment));
  }
  deleteEtablishment(id, index) {
// tslint:disable-next-line: max-line-length
    const obs4: Observable<any> = this.http.delete(`http://open-reza.herokuapp.com/api/establishments/${id}`);
    const treatment = (response: any) => {
      return response as Establishment;
    };
    return obs4.pipe(map(treatment));
  }
}
