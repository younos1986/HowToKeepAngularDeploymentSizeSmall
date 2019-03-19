import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UserRoutingModule } from './user.routing';
import { UserComponent } from './user.component';

import { IndexComponent } from './pages/index/index.component';

@NgModule({

  declarations: [
    UserComponent,
    IndexComponent
  ],

  imports: [
    CommonModule,
    UserRoutingModule
  ]

})
export class UserModule { }
