import { Component, OnInit } from '@angular/core';

import { NotifyService } from '../../../../services/notify.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private _notifyService: NotifyService) { }

  ngOnInit() {

    this._notifyService.onSuccess('onSuccess', 'body');
    this._notifyService.onInfo('onInfo', 'body');
    this._notifyService.onError('onError', 'body');
    this._notifyService.onWarning('onWarning', 'body');


  }

}
