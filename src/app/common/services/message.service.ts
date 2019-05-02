import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message.models';
import { FormGroup } from '@angular/forms';
import {environment} from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})

export class MessageService {
// tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private httpClient: HttpClient) { }

  public getMessage(id: string): Observable<Message> {
    // tslint:disable-next-line: max-line-length
    const obs: Observable<any> = this.http.get(`${environment.apiUrl}/messages/${id}`) ;

    const treatment = (response: any) => {
      return response as Message;
    };

    return obs.pipe(map(treatment));
  }

  public postMessage(myForm:any):Observable<Message> {
    const obs: Observable<any> = this.httpClient
    .post(`${environment.apiUrl}/messages`, myForm);

    const treatment = (response: any) => {
      return response as Message;
    };

    return obs.pipe(map(treatment));
  }

  public getListMessage() {
  // tslint:disable-next-line: max-line-length
    const obs: Observable<any> = this.http.get(`${environment.apiUrl}/messages`) ;

    const treatment = (response: any) => {
      return response as Message;
    };

    return obs.pipe(map(treatment));
  }

  public delMessage(id) {
    const obs: Observable<any> = this.http
    .delete(`${environment.apiUrl}/messages/${id}`);
    const treatment = (response: any) => {
      return response as Message;
    };

    return obs.pipe(map(treatment));
  }

}
