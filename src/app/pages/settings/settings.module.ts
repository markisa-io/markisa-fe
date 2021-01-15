import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MySettingRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

@NgModule({
    imports: [
        CommonModule,
        MySettingRoutingModule
    ],
    declarations: [SettingsComponent]
})

export class SettingsModule { }
