import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: '', loadChildren: './projects/home/home.module#HomeModule' },
  { path: 'dashboard', loadChildren: './projects/dashboard/dashboard.module#DashboardModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
