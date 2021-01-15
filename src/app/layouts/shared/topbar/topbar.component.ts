import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Notification } from './topbar.model';

import { notificationItems } from './data';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  notificationItems: Notification[] = [];
  languages!: Array<{
    id: number;
    flag?: string;
    name: string;
  }>;
  selectedLanguage!: {
    id: number;
    flag?: string;
    name: string;
  };

  openMobileMenu!: boolean;

  @Output() settingsButtonClicked = new EventEmitter();
  @Output() mobileMenuButtonClicked = new EventEmitter();

  constructor(private router: Router) {}

  ngOnInit() {
    // get the notifications
    //this._fetchNotifications();
    //this.openMobileMenu = false;
  }

  logout() {
  }
  
  toggleRightSidebar() {}
}
