import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'markisa-fe';

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    this.loadCurrentUser();
  }

  loadCurrentUser() {
    // Get the token from the local storage
    const token = localStorage.getItem('markisaToken');

    // Send the token to load the user
    this.authService.loadCurrentUser(token).subscribe( () => {
      console.log('loaded user');
    }, error => {
      console.log(error);
    });
  }
}
