import { ApiHttpService } from './core/services/api-http.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiEndpointsService } from './core/services/api-endpoints.service';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutsModule } from './layouts/layouts.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Constants } from './config/constants';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [
    Constants, 
    ApiHttpService,
    ApiEndpointsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
