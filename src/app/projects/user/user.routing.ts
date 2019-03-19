import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UserComponent } from './user.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  {
    'path': '',
    'component': UserComponent,
    'children': [
      {
        'path': '',
        'component': IndexComponent,
        data: {
          breadcrumb: ' Index ',
        }
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {
}
