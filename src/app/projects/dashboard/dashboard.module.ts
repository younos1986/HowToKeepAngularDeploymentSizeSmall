import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { AgmCoreModule } from '@agm/core';

import { KendoFeatureModule  } from '../../modules/kendo-feature.module';
import { AngularMaterialFeatureModule } from '../../modules/angular-material-feature.module';
import { NotifyService } from '../../services/notify.service';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BidiModule } from '@angular/cdk/bidi';


import {
  MenuComponent,
  HeaderComponent,
  SidebarComponent,
  NotificationComponent,
  OptionsComponent,

  AuthLayoutComponent,
  AccordionAnchorDirective,
  AccordionLinkDirective,
  AccordionDirective
} from './core';


import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { DashboardRoutingModule } from './dashboard.routing';


import { DashboardComponent } from './dashboard.component';
import { IndexComponent } from './pages/index/index.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
  minScrollbarLength: 20
};

@NgModule({

  declarations: [
    DashboardComponent,

    HeaderComponent,
    SidebarComponent,
    NotificationComponent,
    OptionsComponent,
    MenuComponent,

    AuthLayoutComponent,
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,


    IndexComponent
  ],
  imports: [

    // BrowserModule,
    CommonModule,
    // BrowserAnimationsModule,
    // RouterModule.forRoot(AppRoutes),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    LoadingBarRouterModule,


    KendoFeatureModule,
    AngularMaterialFeatureModule,
    DashboardRoutingModule,

    FlexLayoutModule,
    BidiModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyB3HQ_Gk_XRt6KitPdiHQNGpVn0NDwQGMI' }),
    PerfectScrollbarModule

  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    NotifyService
  ]
})
export class DashboardModule { }
