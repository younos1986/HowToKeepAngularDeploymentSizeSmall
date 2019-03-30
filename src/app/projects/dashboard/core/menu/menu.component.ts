import { Component, NgZone, ViewChild, Output, EventEmitter } from '@angular/core';
import { MenuService } from './menu.service';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.html',
  providers: [MenuService]
})
export class MenuComponent {
  currentLang = 'en';

  constructor(
    public menuService: MenuService,
    public translate: TranslateService) {
  }

  addMenuItem(): void {
    this.menuService.add({
      state: 'menu',
      name: 'MENU',
      type: 'sub',
      icon: 'trending_flat',
      children: [
        { state: 'menu', name: 'MENU' },
        { state: 'timeline', name: 'MENU' }
      ]
    });
  }
}
