import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScriptLoaderService } from '../../services/script-loader.service';

import {HomeRoutingModule } from './home.routing';

import { HomeComponent } from './home.component';
import { IndexComponent } from './pages/index/index.component';

@NgModule({

  declarations: [
    HomeComponent,
     IndexComponent
    ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers:[

    ScriptLoaderService

  ]

})
export class HomeModule { }
