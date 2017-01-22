import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { PineappleTartsPage } from '../pages/pineapple-tarts/pineapple-tarts';
import { PineappleRecipePage } from '../pages/pineapple-recipe/pineapple-recipe';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PineappleTartsPage,
    PineappleRecipePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PineappleTartsPage,
    PineappleRecipePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
