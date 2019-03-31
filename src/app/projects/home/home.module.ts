import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AngularMaterialFeatureModule , KendoFeatureModule} from '../../modules/index';
import { ScriptLoaderService } from '../../services/script-loader.service';

import {HomeRoutingModule } from './home.routing';

import { HomeComponent } from './home.component';
import { IndexComponent } from './pages/index/index.component';

import {LoginComponent } from './pages/login/login.component';

@NgModule({

  declarations: [
    HomeComponent,
     IndexComponent,
    LoginComponent
    ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularMaterialFeatureModule
  ],
  providers:[

    ScriptLoaderService

  ],
  entryComponents:[
    LoginComponent

  ]

})
export class HomeModule { }
