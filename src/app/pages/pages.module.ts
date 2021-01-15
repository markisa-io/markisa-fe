import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FlatpickrModule } from 'angularx-flatpickr';

import { UIModule } from '../shared/ui/ui.module';
import { PagesRoutingModule } from './pages-routing.module';

import { HomeModule } from './home/home.module';
import { MyProfileModule } from './myprofile/myprofile.module';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    NgbDropdownModule,
    NgApexchartsModule,
    FlatpickrModule.forRoot(),
    UIModule,
    HomeModule,
    MyProfileModule,
    SettingsModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
