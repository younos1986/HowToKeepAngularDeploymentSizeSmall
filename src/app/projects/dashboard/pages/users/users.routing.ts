import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import {AddModifyUserComponent } from './add-modify-user/add-modify-user.component';

const routes: Routes = [
  {
    'path': '',
    'component': UsersComponent,
    data: {
          breadcrumb: ' users ',
        }
  },
  {
    'path': 'add-user',
    'component': AddModifyUserComponent,
    data: {
      breadcrumb: ' users ',
    }
  },
  {
    'path': 'modify-user',
    'component': AddModifyUserComponent,
    data: {
      breadcrumb: ' users ',
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRouting {
}
