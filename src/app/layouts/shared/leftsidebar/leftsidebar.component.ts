import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { SIDEBAR_WIDTH_CONDENSED } from '../../layout.model';

@Component({
  selector: 'app-leftsidebar',
  templateUrl: './leftsidebar.component.html',
  styleUrls: ['./leftsidebar.component.scss'],

})
export class LeftsidebarComponent implements OnInit {

  @Input()
  sidebarType!: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
  }

  /**
   * Is sidebar condensed?
   */
  // isSidebarCondensed() {
  //   return this.sidebarType === SIDEBAR_WIDTH_CONDENSED;
  // }
}
