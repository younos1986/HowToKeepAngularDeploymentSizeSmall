import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogdetailComponent } from './blogdetail.component';


import { BlogdetailRoutingModule } from "./blogdetail.routing";

@NgModule({
  imports: [CommonModule, BlogdetailRoutingModule],
  declarations: [BlogdetailComponent]
})
export class BlogdetailModule {}
