import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './pricing.component';

import { PricingRoutingModule } from "./pricing.routing";

@NgModule({
  imports: [CommonModule, PricingRoutingModule],
  declarations: [PricingComponent]
})
export class PricingModule {}
