import { RegisterResponse, RegisterRequest } from './../../shared/models/account.model';
import { ApiEndpointsService } from './../../core/services/api-endpoints.service';
import { ApiHttpService } from './../../core/services/api-http.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private apiHttpService: ApiHttpService, private apiEndpointsService: ApiEndpointsService) { }
  
  confirm() {}
  
  reset() {}

  signup(model: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(this.apiEndpointsService.getSignupEndpoint(), model);
  }


}
