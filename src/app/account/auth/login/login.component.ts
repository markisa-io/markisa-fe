import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error = '';
  loading = false;

  // Convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
    // Initialise loginForm
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
    });

  }

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    const usernameOrEmail = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;

    this.loading = true;
    this.authService.login(usernameOrEmail, password).subscribe(() => {
      // When the user is successfully logged in
      // Redirect to the last opened Url
      this.router.navigate([this.returnUrl]);
      this.loading = false;
    }, error => {
      console.log(error.error);
      this.error = error.error.error_description;
      this.loading = false;
    });
  }
}
