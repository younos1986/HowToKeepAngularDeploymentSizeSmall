import { Component, OnInit } from '@angular/core';

import { ScriptLoaderService } from '../../../../services/script-loader.service';

declare const Swiper;
declare const $;

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  constructor(private _script: ScriptLoaderService) { }

  ngOnInit() {

    this._script.loadScripts('body', [
      '/assets/detail/js/jquery.magnific-popup.js',
    '/assets/detail/js/swiper.min.js'
  ], true).then(() => {

    console.log('jquery.magnific-popup.js and swiper.min.js are loaded');

    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    if ($('.image-link').length) {
      $('.image-link').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true
        }
      });
    }
    if ($('.image-link2').length) {
      $('.image-link2').magnificPopup({
        type: 'image',
        gallery: {
          enabled: true
        }
      });
    }


      });

  }



}
