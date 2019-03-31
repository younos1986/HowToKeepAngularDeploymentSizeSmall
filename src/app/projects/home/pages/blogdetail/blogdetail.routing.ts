import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BlogdetailComponent } from './blogdetail.component';

const routes: Routes = [
  {
    path: "",
    component: BlogdetailComponent,
    data: {
      breadcrumb: " Blogdetail "
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogdetailRoutingModule {}
