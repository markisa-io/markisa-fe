import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// tslint:disable-next-line: max-line-length
import { NgbCollapseModule, NgbDatepickerModule, NgbTimepickerModule, NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutsideModule } from 'ng-click-outside';

import { SlimscrollDirective } from './slimscroll.directive';

import { PreloaderComponent } from './preloader/preloader.component';
import { FeatherIconDirective } from './feather-icon.directive';

@NgModule({
  declarations: [SlimscrollDirective, PreloaderComponent, FeatherIconDirective],
  imports: [
    CommonModule,
    FormsModule,
    ClickOutsideModule,
    NgbCollapseModule,
    NgbDatepickerModule,
    NgbTimepickerModule,
    NgbTooltipModule,
    NgbDropdownModule
  ],
  exports: [SlimscrollDirective, FeatherIconDirective, PreloaderComponent]
})
export class UIModule { }
