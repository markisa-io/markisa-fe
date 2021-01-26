import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
    let params = new HttpParams();
    params = params.append('grant_type', 'password');
    params = params.append('username', email);
    params = params.append('password', password);
    params = params.append('client_id', 'Markisa_App');
    params = params.append('scope', 'Markisa');
    console.log(params.toString());
    return this.http.post(this.baseUrl + 'connect/token', params.toString(), { headers })
          .pipe(
            map(response => {
              console.log(response);
              return response;
            })
          );
    // return this.http.post(this.baseUrl + 'connect/token', values).pipe(
    //   map((user: IUser) => {

    // example how to use local storage
    //     if (user) {
    //       localStorage.setItem('token', user.token);
    //       this.currentUserSource.next(user);
    //     }
    //   } )
    // );
  }
}
