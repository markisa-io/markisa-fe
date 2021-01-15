import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileRoutingModule } from './myprofile-routing.module';
import { MyProfileComponent } from './myprofile.component';

@NgModule({
    imports: [
        CommonModule,
        MyProfileRoutingModule
    ],
    declarations: [MyProfileComponent]
})

export class MyProfileModule { }
