import { NgModule } from '@angular/core';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import angular kendo angular
import {
  MatFormFieldModule, MatInputModule,
  MatButtonModule, MatButtonToggleModule,
  MatDialogModule, MatIconModule,
  MatSelectModule, MatToolbarModule,
  MatDatepickerModule,
  DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatTableModule, MatCheckboxModule, MatRadioModule, MatCardModule, fadeInContent

} from '@angular/material';

// import { MaterialPersianDateAdapter, PERSIAN_DATE_FORMATS } from '../directives/material-persian-date-adapter/material.persian-date.adapter';



// Import kendo angular ui
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { RTL } from '@progress/kendo-angular-l10n';
import { LayoutModule } from '@progress/kendo-angular-layout';
// import { KendoGridPaginationComponent } from '../directives/kendo-grid-pagination/kendo-grid-pagination.component';


// import { BaseApiService } from '../services/base-api.service';
// import { NotifyService } from '../services/notify.service';
// import { SharedService } from '../services/shared.service';
import { WindowService, WindowRef, WindowCloseResult, DialogService, DialogRef, DialogCloseResult } from '@progress/kendo-angular-dialog';
import { SnotifyModule, SnotifyService, SnotifyPosition, SnotifyToastConfig, ToastDefaults } from 'ng-snotify';


@NgModule({
  declarations: [
   // KendoGridPaginationComponent
  ],
  imports: [

    MatInputModule,
    MatFormFieldModule,
    MatButtonModule, MatButtonToggleModule,
    MatDialogModule, MatIconModule,
    MatSelectModule, MatToolbarModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatRadioModule,
    // MatDatepickerModulePersian,
    MatCardModule,



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

    MatInputModule,
    MatFormFieldModule,
    MatButtonModule, MatButtonToggleModule,
    MatDialogModule, MatIconModule,
    MatSelectModule, MatToolbarModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatRadioModule,
    // MatDatepickerModulePersian,
    MatCardModule,


    ButtonsModule,
    GridModule,
    ExcelModule,
    DropDownsModule,
    InputsModule,
    DateInputsModule,
    DialogsModule,
    LayoutModule,
    //KendoGridPaginationComponent,
    //BrowserAnimationsModule,

  ],
  providers: [

    //BaseApiService,
    //NotifyService,
    //SharedService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService,
    //NotifyService,

    // Enable Right-to-Left mode for Kendo UI components
    { provide: RTL, useValue: false },

  ]

})
export class KendoFeatureModule {
}
