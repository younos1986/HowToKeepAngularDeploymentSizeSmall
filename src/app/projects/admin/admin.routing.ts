import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { IndexComponent } from './pages/index/index.component';

import { AdminLayoutComponent } from './core';

const routes: Routes = [
  {
    'path': '',
    'component': AdminComponent,
    'children': [
      {
        'path': 'index',
        'component': IndexComponent,
        data: {
          breadcrumb: ' Blog ',
        }
      },
      {
        'path': '',
        'component': AdminLayoutComponent,
        data: {
          breadcrumb: ' dashboard ',
        }
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
