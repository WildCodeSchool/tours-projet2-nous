import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message.models';

@Injectable({
  providedIn: 'root',
})

export class MessageService {
  public service: HttpClient;
  constructor(PARAM_SERVICE: HttpClient) {
    this.service = PARAM_SERVICE;
  }

  public getMessage(id: string): Observable<Message> {
// tslint:disable-next-line: max-line-length
    const obs1: Observable<any> = this.service.get(`http://open-reza.herokuapp.com/api/messages/${id}`);

    const treatment = (PARAM_DATA: any) => {
      return PARAM_DATA as Message;
    };

    return obs1.pipe(map(treatment));
  }
}
