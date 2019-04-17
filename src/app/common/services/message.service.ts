import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message.models';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root', 
  

})

export class MessageService {
// tslint:disable-next-line: max-line-length
  constructor(private http: HttpClient, private httpClient: HttpClient) { }

  public getMessage(id: string): Observable<Message> {
    // tslint:disable-next-line: max-line-length
    const obs1: Observable<any> = this.http.get(`http://open-reza.herokuapp.com/api/messages/${id}`) ;

    const treatment = (response: any) => {
      return response as Message;
    };

    return obs1.pipe(map(treatment));
  }

public postMessage(myForm:any):Observable<Message> {
  const obs2: Observable<any> = this.httpClient
    .post('http://open-reza.herokuapp.com/api/messages', myForm);

  const treatment = (response: any) => {
    return response as Message;
  };

  return obs2.pipe(map(treatment));
}

  public getListMessage() {
  // tslint:disable-next-line: max-line-length
  const obs3: Observable<any> = this.http.get('http://open-reza.herokuapp.com/api/messages') ;

  const treatment = (response: any) => {
    return response as Message;
  };

  return obs3.pipe(map(treatment));
}

}
