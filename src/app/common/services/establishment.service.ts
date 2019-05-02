import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Establishment } from '../models/establishment.model';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EstablishmentService {
  public service: HttpClient;
  public date;
  public nbPersonne;

  constructor(public http: HttpClient) {}

  public resultSearch;

  public getEstablishment(id: string): Observable<Establishment> {
    const obs: Observable<any> = this.http.get(
      `${environment.apiUrl}/establishments/${id}`,
    );
    const treatment = (response: any) => {
      return response as Establishment;
    };
    return obs.pipe(map(treatment));
  }
  public update(id: string, myForm: Establishment) {
    const obs: Observable<any> = this.http.put(
      `${environment.apiUrl}/establishments/${id}`,
      myForm,
    );
    const treatment = (response: any) => {
      return response as Establishment;
    };
    return obs.pipe(map(treatment));
  }

  public createCom(myCom: string) {
    const obs: Observable<any> = this.http.post(
      `${environment.apiUrl}/establishments/`,
      myCom,
    );
    const treatment = (response: any) => {
      return response as Establishment;
    };
    return obs.pipe(map(treatment));
  }

  public create(myForm: Establishment) {
    const obs: Observable<any> = this.http.post(
      `${environment.apiUrl}/establishments/`,
      myForm,
    );
    const treatment = (response: any) => {
      return response as Establishment;
    };
    return obs.pipe(map(treatment));
  }

  public getListEstablishment() {
    const obs: Observable<any> = this.http.get(
      `${environment.apiUrl}/establishments`,
    );
    const treatment = (response: any) => {
      return response as Establishment[];
    };
    return obs.pipe(map(treatment));
  }
  public getListOurEstablishment() {
    const obs: Observable<any> = this.http.get(
      `${environment.apiUrl}/profiles/establishments/`,
    );
    const treatment = (response: any) => {
      return response as Establishment[];
    };
    return obs.pipe(map(treatment));
  }
  deleteEtablishment(id) {
    // tslint:disable-next-line: max-line-length
    const obs: Observable<any> = this.http.delete(
      `${environment.apiUrl}/establishments/${id}`,
    );
    const treatment = (response: any) => {
      return response as Establishment;
    };
    return obs.pipe(map(treatment));
  }

  research(word) {
    this.resultSearch = word;
  }
}
