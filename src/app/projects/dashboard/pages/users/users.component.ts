import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { State } from '@progress/kendo-data-query';
import {
  GridDataResult,
  DataStateChangeEvent
} from '@progress/kendo-angular-grid';

import {UserService} from './User.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  public view: Observable<GridDataResult>;
  public state: State = {
    skip: 0,
    take: 5
  };

  constructor(private _userService: UserService) {

  }

  ngOnInit(): void {

    this.getUsers();
  }

  getUsers()
  {
    this._userService.getUsers().subscribe(
      res=>
      {
        console.log(res);
        this.view = res.value;
      });
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;

  }

}
