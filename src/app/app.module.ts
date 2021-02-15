import { ApiEndpointsService } from './core/services/api-endpoints.service';
import { ApiHttpService } from './core/services/api-http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LayoutsModule } from './layouts/layouts.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutsModule
  ],
  providers: [
    ApiHttpService,
    ApiEndpointsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
