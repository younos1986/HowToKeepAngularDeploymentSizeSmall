import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  {
    'path': '',
    'component': BlogComponent,
    'children': [
      {
        'path': '',
        'component': IndexComponent,
        data: {
          breadcrumb: ' Blog ',
        }
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {
}
