import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  {
    'path': '',
    'component': DashboardComponent,
    'children': [
      {
        'path': '',
        'component': IndexComponent,
        data: {
          breadcrumb: ' Blog ',
        }
      },
      {
         path: 'docs',
         loadChildren: './pages/docs/docs.module#DocsModule'
     }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {
}
