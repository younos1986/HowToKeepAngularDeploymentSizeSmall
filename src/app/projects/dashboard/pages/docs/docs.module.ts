import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsComponent } from './docs.component';

import {DocsRoutingModule} from './docs.routing';

import { KendoFeatureModule, AngularMaterialFeatureModule } from '../../../../modules/index';

@NgModule({
  imports: [
    CommonModule,
    DocsRoutingModule,

    KendoFeatureModule,
    AngularMaterialFeatureModule,



  ],
  declarations: [DocsComponent],
  providers:[


  ]

})
export class DocsModule { }
