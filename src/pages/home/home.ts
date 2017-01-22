import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { PineappleTartsPage } from '../pineapple-tarts/pineapple-tarts';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goTo(number) {
      if (number == 6) {
          this.navCtrl.push(PineappleTartsPage);
      }
  }
}
