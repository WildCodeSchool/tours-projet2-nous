import { Injectable } from '@angular/core';

import { map } from "rxjs/operators";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Message } from '../models/message.models';

@Injectable({
    providedIn: 'root'
})

export class MessageService {

    private service: HttpClient;
    constructor(param_service: HttpClient) {
        this.service = param_service;
    }

    public getMessage(): Observable<Message[]> {
        const obs1: Observable<any> = this.service.get("http://open-reza.herokuapp.com/api/messages/");

        const treatment = (param_data: any) => {
            return param_data as Message[];
        };

        return obs1.pipe(map(treatment));
    }
}
