import { ApiEndpointsService } from './../../core/services/api-endpoints.service';
import { ApiHttpService } from './../../core/services/api-http.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiHttpService: ApiHttpService, private apiEndpointsService: ApiEndpointsService) { }
  
  confirm() {}
  
  reset() {}

  signup(model: any) {
    return this.apiHttpService.post(this.apiEndpointsService.getSignupEndpoint(), model);
  }


}
