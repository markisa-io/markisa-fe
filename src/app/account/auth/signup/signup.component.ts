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
    registerModel: RegisterRequest = emptyRegisterRequest();
    registerResponse: RegisterResponse = emptyRegisterResponse();
    apiError: ApiErrorResponse = emptyApiErrorResponse();

    constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    }

    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            fullname: ['', Validators.required],
            companyname: ['', Validators.required],
            //phone: ['', Validators.pattern('/^(^\+62\s?|^0)(\d{3,4}-?){2}\d{3,4}$/g')],
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

        console.log("submit");
    }

    sendSignUpRequest() {
        //assign UI value to model
        
        //send the HTTP request
        this.authService.signup(this.registerModel).subscribe((response) => {
            this.registerResponse = response;
        }, (error) => {
            this.apiError = error;
        })
    };
}
