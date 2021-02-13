import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SignUpState } from '../../../shared/common';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, AfterViewInit {

    signupForm!: FormGroup;
    error = '';
    state: SignUpState = SignUpState.FirstPage;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
        });
    }

    ngAfterViewInit() {
        document.body.classList.add('authentication-bg');
        document.body.classList.add('authentication-bg-pattern');
    }


    // convenience getter for easy access to form fields
    get f() { return this.signupForm.controls; }

    displayFirstPage(): boolean {
        return this.state == SignUpState.FirstPage;
    }

    displaySecondPage(): boolean {
        return this.state == SignUpState.SecondPage;
    }

    onSubmit() {
        if (this.state = SignUpState.FirstPage)
            this.state = SignUpState.SecondPage;
        else
            this.sendSignUpRequest();
            //this.state = SignUpState.FirstPage
    }

    sendSignUpRequest() {
        //assign UI value to model

        //send the HTTP request
    };
}
