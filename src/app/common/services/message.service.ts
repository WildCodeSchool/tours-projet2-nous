import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message.models';

@Injectable({
  providedIn: 'root',
})

export class MessageService {
  constructor(private http: HttpClient) {}

  public getMessage(id: string): Observable<Message> {
  // tslint:disable-next-line: max-line-length
    const obs1: Observable<any> = this.http.get(`http://open-reza.herokuapp.com/api/messages/${id}`);

    const treatment = (response: any) => {
      return response as Message;
    };

    return obs1.pipe(map(treatment));
  }
}
