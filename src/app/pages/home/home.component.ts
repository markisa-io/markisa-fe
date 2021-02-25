import { Component, OnInit } from '@angular/core';
import { MyProfileService } from '../../core/services/profile/myprofile.service'


@Component({
  selector: 'app-page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    constructor(
      private myProfileService: MyProfileService
    ) {}

    ngOnInit() {
      this._fetchData();
    }

    private _fetchData() {
      return this.myProfileService.getMyProfile()
        .subscribe(user => {
          console.log('USER', user)
        });
    }

}
