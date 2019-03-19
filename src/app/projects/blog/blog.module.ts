import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BlogRoutingModule } from './blog.routing';

import { BlogComponent } from './blog.component';
import { IndexComponent } from './pages/index/index.component';

@NgModule({
  declarations: [
    BlogComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ],

})
export class BlogModule { }

