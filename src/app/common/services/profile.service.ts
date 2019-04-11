import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile.model'
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private service:  HttpClient;

    constructor(param_service:  HttpClient) {
        this.service  =  param_service;
    }

    public  getProfile ():  Observable<Profile> {
        const  obs1:Observable<any> = this.service.get("http://open-reza.herokuapp.com/api/profiles");
        const  treatment  = ( param_data:any) => {
            return  param_data as Profile;
            console.log(param_data)
        };

        return  obs1.pipe( map( treatment) );
    }
}
