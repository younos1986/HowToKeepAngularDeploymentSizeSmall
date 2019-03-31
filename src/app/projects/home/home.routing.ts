import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path: "",
        component: IndexComponent,
        data: {
          breadcrumb: " Index "
        }
      },
      {
        path: "about",
        loadChildren: "./pages/aboutus/aboutus.module#AboutusModule"
      },
      {
        path: "blog",
        loadChildren: "./pages/blog/blog.module#BlogModule"
      },
      {
        path: "blog-detail",
        loadChildren: "./pages/blogdetail/blogdetail.module#BlogdetailModule"
      },
      {
        path: "pricing",
        loadChildren: "./pages/pricing/pricing.module#PricingModule"
      },
      {
        path: "contact",
        loadChildren: "./pages/contact/contact.module#ContactModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule  {
}
