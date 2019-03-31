import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';

import { ContactRoutingModule } from "./contact.routing";

@NgModule({
  imports: [CommonModule, ContactRoutingModule],
  declarations: [ContactComponent]
})
export class ContactModule {}
