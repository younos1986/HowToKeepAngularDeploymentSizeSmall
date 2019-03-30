import { Component, Output, EventEmitter } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html'
})
export class OptionsComponent {

  currentLang = 'fa';
  showSettings = false;
  options = {
    collapsed: false,
    compact: false,
    boxed: false,
    dark: false,
    dir: 'rtl'
  };

  @Output() messageEvent = new EventEmitter<Object>();

  constructor(
    public translate: TranslateService) {
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/fa|en/) ? browserLang : 'fa');
  }

  sendOptions() {
    debugger;
    if (this.options.collapsed === true ) {
      this.options.compact = false;
    }
    if (this.options.compact === true ) {
      this.options.collapsed = false;
    }
    this.messageEvent.emit(this.options);
  }
}
