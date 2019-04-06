import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { ScriptLoaderService} from '../../services/script-loader.service';


import { LoginComponent } from './pages/login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private _script: ScriptLoaderService) { }

  ngOnInit() {

    
        this._script.loadScripts('body', [
          'assets/home/js/popper.min.js',
        ], true).then(() => {
            console.log('home page js files are loaded');
          });
     

  }


  public toggleModal(){
    let dialogRef = this.dialog.open(LoginComponent, {
    });
  }

}
