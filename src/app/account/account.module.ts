import { NgModule } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AccountRoutingModule,
    AuthModule
  ],
  providers:[
    AuthService
  ]
})
export class AccountModule { }
