import { Component, OnInit } from '@angular/core';

import { ScriptLoaderService} from '../../services/script-loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _script: ScriptLoaderService) { }

  ngOnInit() {

    this._script.loadScripts('body', [
      'assets/home/js/popper.min.js'], true).then(() => {

        console.log('popper.min.js is loaded');

      });

  }



}
