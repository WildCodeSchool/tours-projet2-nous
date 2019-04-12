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
}