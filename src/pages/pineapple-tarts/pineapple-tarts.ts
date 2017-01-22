import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PineappleRecipePage } from '../pineapple-recipe/pineapple-recipe';

/*
  Generated class for the PineappleTarts page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pineapple-tarts',
  templateUrl: 'pineapple-tarts.html'
})
export class PineappleTartsPage {
  first: number = 20;
  second: number = 15;
  third: number = 10;
  butter: number= 250;
  plainflour: number = 200;
  pineapples: number = 20;
  cloves: number = 10;
  sugar: number = 200;
  temperature: number = 150;
  cooktime: number = 150;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PineappleTartsPage');
  }

  make() {
    this.navCtrl.push(PineappleRecipePage);
  }

}
