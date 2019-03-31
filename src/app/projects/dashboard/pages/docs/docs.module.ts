import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DocsComponent } from './docs.component';
// import {DocsRoutingModule} from './docs.routing';

import { KendoFeatureModule, AngularMaterialFeatureModule } from '../../../../modules/index';


const routes: Routes = [
  {
    'path': '',
    'component': DocsComponent,
    data: {
      breadcrumb: ' docs ',
    }
  }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    KendoFeatureModule,
    AngularMaterialFeatureModule,



  ],
  declarations: [DocsComponent],
  providers:[


  ]

})
export class DocsModule { }
