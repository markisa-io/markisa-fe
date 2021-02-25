import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable ,  throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(
    private http: HttpClient
  ) {}

  private formatErrors(error: any) {
    return  throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${environment.baseUrl}${path}`, { params } )
      .pipe(catchError(this.formatErrors));
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      `${environment.baseUrl}${path}`,
      JSON.stringify(body)
    ).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      `${environment.baseUrl}${path}`, body 
    ).pipe(catchError(this.formatErrors));
  }

  loginPost(path: string, email: string, password: string): Observable<any> {
    let headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded', 'Access-Control-Allow-Origin':'*'});

    // Set mandatory parameters to be sent
    let params = new HttpParams();
    params = params.append('grant_type', 'password');
    params = params.append('username', email);
    params = params.append('password', password);
    params = params.append('client_id', 'Markisa_App');
    params = params.append('scope', 'Markisa');

    return this.http.post(
      `${environment.baseUrl}${path}`, params, { headers } 
    ).pipe(catchError(this.formatErrors));
  }

//JSON.stringify(body)
  delete(path): Observable<any> {
    return this.http.delete(
      `${environment.baseUrl}${path}`
    ).pipe(catchError(this.formatErrors));
  }
}
