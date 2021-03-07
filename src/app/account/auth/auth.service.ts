import { RegisterResponse, RegisterRequest } from './../../shared/models/account.model';
import { ApiEndpointsService } from './../../core/services/api-endpoints.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, mergeMap } from 'rxjs/operators';
import { of, ReplaySubject } from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private apiEndpointsService:ApiEndpointsService, private jwtHelper: JwtHelperService) { }
  
  private currentUserSource = new ReplaySubject<any>(1);
  currentUser$ = this.currentUserSource.asObservable();

  confirm() {}
  
  reset() {}

  signUp(model: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(this.apiEndpointsService.getSignupEndpoint(), model);
  }

  sendConfirmation(){
    return this.http.get(this.apiEndpointsService.getConfirmationEmailEndpoint());
  }

  loadCurrentUser(token: string | null) {
    // Check if the JWT token exists
    if (token === null || this.jwtHelper.isTokenExpired(token)) {
      // Set everything to null if does not exist
      this.currentUserSource.next(null);
      return of(null);
    }

    // Set the header with token authorization
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

    // Get the user information for the first login
    return this.http.get<any>(this.apiEndpointsService.getMyProfileEndpoint(), { headers })
      .pipe(
        map(user => {
          this.currentUserSource.next(user);
        })
    );
  }

  login(usernameOrEmail: string, password: string) {
    // Set the header content type to urlencoded
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

    // Set mandatory parameters to be sent
    let params = new HttpParams();
    params = params.append('grant_type', 'password');
    params = params.append('username', usernameOrEmail);
    params = params.append('password', password);
    params = params.append('client_id', 'Markisa_App');
    params = params.append('scope', 'Markisa');

    // Send the parameter with the set header to the API
    return this.http.post<any>(this.apiEndpointsService.getConnectToken(), params.toString(), { headers })
      .pipe(
        map(token => {
          // Check whether the token is successfully retrieved
          if (token && token.access_token){
            // Set the token to local storage
            localStorage.setItem('markisaToken', token.access_token);
          }

          return token;
        }),
        mergeMap((token) => {
          if (token && token.access_token) {
            // Get the User Information when token exists
            headers = new HttpHeaders();
            headers = headers.set('Authorization', `Bearer ${token.access_token}`);

            return this.http.get<any>(this.apiEndpointsService.getMyProfileEndpoint(), { headers })
              .pipe(
                map(user => {
                  // Store the user information to the Replay Subject
                  this.currentUserSource.next(user);
                })
              );
          }
          // Return nothing if token does not exist
          return of(null);
        })
      );
  }

}
