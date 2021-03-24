import { AuthService } from './../auth.service';
import { emptyRegisterRequest, RegisterRequest, emptyRegisterResponse, RegisterResponse } from './../../../shared/models/account.model';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiErrorResponse, emptyApiErrorResponse } from 'src/app/shared/models/api-error.model';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, AfterViewInit {

    signupForm!: FormGroup;
    submitted = false;
    error = '';
    registerRequest: RegisterRequest = emptyRegisterRequest();
    registerResponse: RegisterResponse = emptyRegisterResponse();
    apiError: ApiErrorResponse = emptyApiErrorResponse();

    constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    }

    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            fullname: ['', Validators.required],
            companyname: ['', Validators.required],
            phone: ['', Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$')],
            password: ['', Validators.required]
        });
        
    }

    ngAfterViewInit() {
        document.body.classList.add('authentication-bg');
        document.body.classList.add('authentication-bg-pattern');
    }

    // convenience getter for easy access to form fields
    get f() { return this.signupForm.controls; }

    onSubmit() {
        this.submitted = true;
        this.apiError = emptyApiErrorResponse();

        if (this.signupForm.invalid)
            return;

        //1. Register the User
        //assign UI value to model
        this.registerRequest.emailAddress = this.signupForm.controls["email"].value;
        this.registerRequest.userName = this.signupForm.controls["email"].value;
        this.registerRequest.name = this.signupForm.controls["fullname"].value;
        this.registerRequest.companyName = this.signupForm.controls["companyname"].value;
        this.registerRequest.phoneNumber = this.signupForm.controls["phone"].value;
        this.registerRequest.password = this.signupForm.controls["password"].value;
        this.registerRequest.appName = "Markisa";
        this.registerRequest.surName = "";

        console.log(this.registerRequest);

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

        console.log(this.registerResponse);
        console.log(this.apiError);

        //2. Login the registered User automatically (to get token)
        if (this.apiError.error.code != "")
            return;

        this.authService.login(this.registerRequest.userName, this.registerRequest.password).subscribe((response) => {
            //3. Send Confirm
            this.authService.sendRegistrationConfirmationEmail();
        }, error => {
            console.log(error.error);
        });
    }
}
