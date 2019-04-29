import { NotifyService } from './../../../../services/notify.service';
import { BaseApiService  } from './../../../../services/base-api.service';
import {EnvService } from './../../../../env/env.service';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRouting} from './users.routing';
import { KendoFeatureModule, AngularMaterialFeatureModule } from '../../../../modules/index';

import { UsersComponent } from './users.component';
import { UserService } from './User.service';

import { AddModifyUserComponent } from './add-modify-user/add-modify-user.component';


@NgModule({
  declarations: [
    UsersComponent,
    AddModifyUserComponent


  ],
  imports: [
    CommonModule,
    KendoFeatureModule,
    AngularMaterialFeatureModule,

    UsersRouting,

  ],
  providers:[
    BaseApiService,
    NotifyService,
    EnvService,

    UserService


  ]

})
export class UsersModule { }
