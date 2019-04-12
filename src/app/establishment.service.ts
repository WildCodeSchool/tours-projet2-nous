import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Establishment } from './common/models/establishment.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EstablishmentService {

  public service: HttpClient;

  constructor(public paramService: HttpClient) {
    this.service = paramService;
  }

  public getEstablishment(id: string): Observable<Establishment> {
    const obs1: Observable<any> = this.paramService.get(
      `http://open-reza.herokuapp.com/api/establishments/${ id }`,
    );
    const treatment = (paramData: any) => {
      return paramData as Establishment;
    };
    return obs1.pipe(map(treatment));
  }
}
