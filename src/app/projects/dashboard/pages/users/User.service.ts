import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BaseApiService } from '../../../../services/base-api.service';
import { NotifyService } from '../../../../services/notify.service';
import { EnvService } from '../../../../env/env.service';

@Injectable()
export class UserService extends BaseApiService {

  constructor(
    public http: HttpClient,
    public notifyService: NotifyService,
    private _env: EnvService
  ) {
    super(http, notifyService);
  }

  getUsers(state: any): Observable<any> {
    return this.http.get(`https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc`);
  }


}
