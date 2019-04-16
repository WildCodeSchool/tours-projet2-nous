import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Profile } from '../models/profile.model';
import { map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {


// tslint:disable-next-line: variable-name
  constructor(private http:  HttpClient) {
  }

  public get ():  Observable<Profile> {
    const  obs1:Observable<any> = this.http.get('http://open-reza.herokuapp.com/api/profiles/');
    const  treatment  = (response:any) => {
      return  response as Profile;
    };

    return  obs1.pipe(map(treatment));
  }
  public update (myForm): Observable<Profile> {
// tslint:disable-next-line: max-line-length
    const obs2:Observable<any> = this.http.put('http://open-reza.herokuapp.com/api/profiles/', myForm);
    const  treatment  = (response:any) => {
      return  response as Profile;
    };
    return  obs2.pipe(map(treatment));
  }

}
