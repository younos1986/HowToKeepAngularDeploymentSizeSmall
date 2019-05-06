import { NgModule } from '@angular/core';

// Import kendo angular ui
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { RTL } from '@progress/kendo-angular-l10n';
import { LayoutModule } from '@progress/kendo-angular-layout';

import { WindowService, WindowRef, WindowCloseResult, DialogService, DialogRef, DialogCloseResult } from '@progress/kendo-angular-dialog';
import { SnotifyModule, SnotifyService, SnotifyPosition, SnotifyToastConfig, ToastDefaults } from 'ng-snotify';


@NgModule({
  declarations: [
   // KendoGridPaginationComponent
  ],
  imports: [


    ButtonsModule,
    GridModule,
    ExcelModule,
    DropDownsModule,
    InputsModule,
    DateInputsModule,
    DialogsModule,
    LayoutModule,

    SnotifyModule,
    //BrowserAnimationsModule,


  ],
  exports: [

    ButtonsModule,
    GridModule,
    ExcelModule,
    DropDownsModule,
    InputsModule,
    DateInputsModule,
    DialogsModule,
    LayoutModule,

    SnotifyModule,
  ],
  providers: [

    //BaseApiService,
    //NotifyService,
    //SharedService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService,
    //NotifyService,

    // Enable Right-to-Left mode for Kendo UI components
    { provide: RTL, useValue: true },
  ]

})
export class KendoFeatureModule {
}
