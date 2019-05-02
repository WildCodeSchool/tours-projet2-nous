import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
// tslint:disable-next-line: max-line-length
    return this.http.post<any>(`${environment.apiUrl}/auth/signin`, { email, password })
// tslint:disable-next-line: ter-arrow-parens
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
              if (user && user.token) {
// tslint:disable-next-line: max-line-length
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', user.token);
              }

              return user;
            }));
  }

  logout() {
        // remove user from local storage to log user out
    localStorage.removeItem('token');
  }

  isLogin() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

}
