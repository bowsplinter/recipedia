import { Component } from '@angular/core';

import { NavController, NavParams, AlertController } from 'ionic-angular';

import { PineappleTartsPage } from '../pineapple-tarts/pineapple-tarts';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController) {
      let alert = navParams.get('alert');
      if (alert == true) {
          console.log('yes');
          this.presentAlert();
      }
  }

  goTo(number) {
      if (number == 6) {
          this.navCtrl.push(PineappleTartsPage);
      }
  }
presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Your preferences has been recorded and adjusted accordingly',
  });
  alert.present();
}
}
