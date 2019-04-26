import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    public user :boolean;
    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        return this.http.post<any>(`http://open-reza.herokuapp.com/api/auth/signin`, { email, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    this.user=true;
                    localStorage.setItem('token', user.token);
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        this.user=false;
        localStorage.removeItem('token');
    }

    
}