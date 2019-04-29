import { Injectable, EventEmitter } from '@angular/core';
import { SnotifyService, SnotifyPosition, SnotifyToastConfig } from 'ng-snotify';
import { Observable, Observer } from 'rxjs';
import { WindowService, WindowRef, WindowCloseResult, DialogService, DialogRef, DialogCloseResult } from '@progress/kendo-angular-dialog';

declare var jquery: any;
declare var $: any;


@Injectable()
export class NotifyService {


  style = 'material';
  timeout = 1000;
  position: SnotifyPosition = SnotifyPosition.rightTop;
  progressBar = true;
  closeClick = true;
  newTop = true;
  backdrop = -1;
  dockMax = 8;
  blockMax = 6;
  pauseHover = true;
  titleMaxLength = 15;
  bodyMaxLength = 80;


  constructor(
    private snotifyService: SnotifyService,
    private dialogService: DialogService) {

  }

  onMainEvent: EventEmitter<string> = new EventEmitter();


  onSuccess(title: string, body: string) {
    this.snotifyService.success(body, title, this.getConfig());
  }


  onInfo(title: string, body: string) {
    this.snotifyService.info(body, title, this.getConfig());
  }
  onError(title: string, body: string) {
    this.snotifyService.error(body, title, this.getConfig());
  }
  onWarning(title: string, body: string) {
    this.snotifyService.warning(body, title, this.getConfig());
  }



  confirm(body: any, yesAction: any, noAction: any) {


    this.snotifyService.confirm(body, {
      timeout: 5000,
      showProgressBar: true,
      closeOnClick: false,
      bodyMaxLength: 250,
      pauseOnHover: true,
      position: SnotifyPosition.rightTop,
      buttons: [
        { text: 'بله', action: () => yesAction(), bold: false },
        { text: 'خیر', action: () => noAction() },
      ]
    });
  }



  getConfig(): SnotifyToastConfig {
    this.snotifyService.setDefaults({
      global: {
        newOnTop: this.newTop,
        maxAtPosition: this.blockMax,
        maxOnScreen: this.dockMax,
      }
    });
    return {
      bodyMaxLength: this.bodyMaxLength,
      titleMaxLength: this.titleMaxLength,
      backdrop: this.backdrop,
      position: this.position,
      timeout: this.timeout,
      showProgressBar: this.progressBar,
      closeOnClick: this.closeClick,
      pauseOnHover: this.pauseHover
    };
  }




  delete(text: string, headeClass: string): Observable<boolean> {

    return Observable.create(observer => {
      const dialog = this.dialogService.open({
        title: 'حذف',
        content: text,
        minWidth: 250,
        actions: [
          { text: 'خیر' },
          { text: 'بله', primary: true }
        ],

      });
      const element = dialog.dialog.location.nativeElement;
      $(element).addClass(headeClass);

      dialog.result.subscribe((result) => {
        if (result instanceof DialogCloseResult) {
          console.log('close');
        } else {
          console.log('action', result);
          var castedResult = result as any;
          if (castedResult.primary === true) {

            observer.next(true);
            observer.complete();

          }
          dialog.close();
        }
      });


    });
  };

}
