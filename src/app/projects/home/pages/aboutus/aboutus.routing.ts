import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AboutusComponent } from './aboutus.component';

const routes: Routes = [
  {
    'path': '',
    'component': AboutusComponent,
    data: {
      breadcrumb: ' Aboutus ',
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutusRoutingModule {
}
