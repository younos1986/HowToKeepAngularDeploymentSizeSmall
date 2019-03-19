import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  { path: 'home', loadChildren: './projects/home/home.module#HomeModule' },
  { path: 'blog', loadChildren: './projects/blog/blog.module#BlogModule' },
  { path: 'user', loadChildren: './projects/user/user.module#UserModule' },
  { path: 'admin', loadChildren: './projects/admin/admin.module#AdminModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
