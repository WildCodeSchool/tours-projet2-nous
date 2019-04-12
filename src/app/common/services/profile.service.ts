import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  private service:  HttpClient;

// tslint:disable-next-line: variable-name
  constructor(PARAM_SERVICE:  HttpClient) {
    this.service  =  PARAM_SERVICE;
  }

  public getProfile ():  Observable<Profile> {
    const  obs1:Observable<any> = this.service.get('http://open-reza.herokuapp.com/api/profiles/');
    const  treatment  = (PARAM_DATA:any) => {
      return  PARAM_DATA as Profile;
      console.log(PARAM_DATA);
    };

    return  obs1.pipe(map(treatment));
  }

}
