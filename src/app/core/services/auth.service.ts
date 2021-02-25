import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, mergeMap } from 'rxjs/operators';
import { of, ReplaySubject } from 'rxjs';
import { CookieService } from '../services/cookie.service';
import { ApiService } from './api.service';
import { User } from '../models/auth.models';
import { MyProfileService } from './profile/myprofile.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;

  // private currentUserSource = new ReplaySubject<any>(1);
  // currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient, 
    private cookieService: CookieService,
    private apiService: ApiService,
    private myProfileService: MyProfileService) { }

  public currentUser() {
    if (!this.user) {
      this.user = JSON.parse(this.cookieService.getCookie('currentUser'));
    }
    return this.user;
  }

  loadCurrentUser(token: string | null) {
    // Check if the JWT token exists
    // if (token === null || this.jwtHelper.isTokenExpired(token)) {
    //   // Set everything to null if does not exist
    //   this.currentUserSource.next(null);
    //   return of(null);
    // }

    // // Set the header with token authorization
    // let headers = new HttpHeaders();
    // headers = headers.set('Authorization', `Bearer ${token}`);

    // // Get the user information for the first login
    // return this.http.get<any>(this.baseUrl + 'api/identity/my-profile', { headers })
    //   .pipe(
    //     map(user => {
    //       this.currentUserSource.next(user);
    //     })
    // );
  }

  login(usernameOrEmail: string, password: string) {
    // Set the header content type to urlencoded
    // let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin':'*'});

    // // Set mandatory parameters to be sent
    // let params = new HttpParams();
    // params = params.append('grant_type', 'password');
    // params = params.append('username', usernameOrEmail);
    // params = params.append('password', password);
    // params = params.append('client_id', 'Markisa_App');
    // params = params.append('scope', 'Markisa');

    return this.apiService.loginPost('connect/token', usernameOrEmail, password)
    .pipe(map(token => {
        if (token && token.access_token) {
            this.user = token;
            console.log('TOKEN', this.user)
            
            this.cookieService.setCookie('currentUser', JSON.stringify(this.user), 1);
            
        }
        return this.user;
    }));

    // Send the parameter with the set header to the API
    // return this.http.post<any>(this.baseUrl + 'connect/token', params.toString(), { headers })
    //   .pipe(
    //     map(token => {
    //       // Check whether the token is successfully retrieved
    //       if (token && token.access_token){
    //         // Set the token to local storage
    //         localStorage.setItem('markisaToken', token.access_token);
    //       }

    //       return token;
    //     }),
    //     mergeMap((token) => {
    //       if (token && token.access_token) {
    //         // Get the User Information when token exists
    //         headers = new HttpHeaders();
    //         headers = headers.set('Authorization', `Bearer ${token.access_token}`);
    //         //this.cookieService.setCookie('currentUser', JSON.stringify(user), 1);
    //         this.currentUserSource.next(token);
    //         console.log('LOGIN', token);
    //         // if (user && user.token) {
    //         //   this.user = user;
    //         //   // store user details and jwt in cookie
    //         //   this.cookieService.setCookie('currentUser', JSON.stringify(user), 1);
    //         // }
    //         return token;

    //         // this.currentUserSource.next(user);
    //         // return this.http.get<any>(this.baseUrl + 'api/identity/my-profile', { headers })
    //         //   .pipe(
    //         //     map(user => {
    //         //       // Store the user information to the Replay Subject
    //         //       this.currentUserSource.next(user);
    //         //     })
    //         //   );
    //       }
    //       // Return nothing if token does not exist
    //       //return of(null);
    //     })
    //   );
  }

  logout() {
    // remove user from local storage to log user out
    // this.cookieService.deleteCookie('currentUser');
    // this.user = null;
}
}
