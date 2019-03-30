import { NgModule } from '@angular/core';

// Import angular kendo angular
import {
  MatFormFieldModule, MatInputModule,
  MatButtonModule, MatButtonToggleModule,
  MatDialogModule, MatIconModule,
  MatSelectModule, MatToolbarModule,
  MatDatepickerModule,
  DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatTableModule, MatCheckboxModule, MatRadioModule, MatCardModule, fadeInContent,
  MatListModule, MatProgressBarModule, MatTabsModule
} from '@angular/material';

import {
  MatSidenavModule,
  MatSlideToggleModule,
} from '@angular/material';

import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
   // KendoGridPaginationComponent
  ],
  imports: [

    MatSidenavModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule, MatButtonToggleModule,
    MatDialogModule, MatIconModule,
    MatSelectModule, MatToolbarModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatMenuModule,
    MatListModule,
    MatProgressBarModule,
    MatTabsModule
  ],


  exports: [


    MatSidenavModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule, MatButtonToggleModule,
    MatDialogModule, MatIconModule,
    MatSelectModule, MatToolbarModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatMenuModule,
    MatListModule,
    MatProgressBarModule,
    MatTabsModule


  ],
  providers: [


  ]

})
export class AngularMaterialFeatureModule {
}
