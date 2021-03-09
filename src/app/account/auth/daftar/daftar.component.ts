import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm, NgControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emptyRegisterRequest, emptyRegisterResponse, RegisterRequest, RegisterResponse } from 'src/app/shared/models/account.model';
import { ApiErrorResponse, emptyApiErrorResponse } from 'src/app/shared/models/api-error.model';
import { ApiEndpointsService } from 'src/app/core/services/api-endpoints.service';

@Component({
  selector: 'app-daftar',
  templateUrl: './daftar.component.html',
  styleUrls: ['./daftar.component.scss']
})
export class DaftarComponent implements OnInit {

  @Input() valuesFromHome: any;

  submitted = false;
  error = '';
  registerRequest: RegisterRequest = emptyRegisterRequest();
  registerResponse: RegisterResponse = emptyRegisterResponse();
  apiError: ApiErrorResponse = emptyApiErrorResponse();

  constructor(private http: HttpClientModule, private authService: AuthService, private apiEndpointsService:ApiEndpointsService) { }

  ngOnInit() {
    console.log("loading daftar");
  }

  login()
  {
    this.authService.login('string4', 'String4!').subscribe((resp) => {
      // console.log(resp);
      
      
      // you can do it here or outside the login
      this.authService.sendRegistrationConfirmationEmail();
    }, error => {
      console.log(error.error);
    });

    // you can also do it here
    // this.authService.sendConfirmation();
  }

  sendSignUpRequest() {
    //assign UI value to model
    this.registerRequest.userName = 'sudik19';
    this.registerRequest.password = 'sudik19!A';
    this.registerRequest.appName = 'sudik19';
    this.registerRequest.emailAddress = 'sudik19@gmail.com';
    
    //send the HTTP request
    this.authService.signUp(this.registerRequest).subscribe((response: RegisterResponse) => {
      this.registerResponse.tenantId = response.tenantId;
      this.registerResponse.userName = response.userName;
      this.registerResponse.name = response.name;
      this.registerResponse.surname = response.surname;
      this.registerResponse.email = response.email;
      this.registerResponse.emailConfirmed = response.emailConfirmed;
      this.registerResponse.phoneNumber = response.phoneNumber;
      this.registerResponse.companyName = response.companyName;
      this.registerResponse.phoneNumberConfirmed = response.phoneNumberConfirmed;
      this.registerResponse.lockoutEnabled = response.lockoutEnabled;
      this.registerResponse.lockoutEnd = response.lockoutEnd;
      this.registerResponse.concurrencyStamp = response.concurrencyStamp;
      this.registerResponse.isDeleted = response.isDeleted;
      this.registerResponse.deleterId = response.deleterId;
      this.registerResponse.deletionTime = response.deletionTime;
      this.registerResponse.lastModificationTime = response.lastModificationTime;
      this.registerResponse.lastModifierId = response.lastModifierId;
      this.registerResponse.creationTime = response.creationTime;
      this.registerResponse.creatorId = response.creatorId;
      this.registerResponse.id = response.id;
      this.registerResponse.extraProperties = response.extraProperties;
      
    }, (error: ApiErrorResponse) => {
        this.apiError.error = error.error;
    });
    // console.log(this.registerResponse);
    // console.log(this.apiError);
  }

}
