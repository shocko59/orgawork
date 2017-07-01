import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { RoundProgressModule, RoundProgressConfig } from 'angular-svg-round-progressbar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HomeworksPage } from '../pages/homeworks/homeworks';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomeworksPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    RoundProgressModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomeworksPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RoundProgressModule, RoundProgressConfig,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  constructor(private _config: RoundProgressConfig) {
    _config.setDefaults({
      color: '#f00',
      background: '#0f0'
    });
  }
}
