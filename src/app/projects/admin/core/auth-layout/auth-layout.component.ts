import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  styles: [':host .mat-drawer-content {padding: 0;} .mat-drawer-container {z-index: 1000}'],
  templateUrl: './auth-layout.component.html'
})
export class AuthLayoutComponent {}
