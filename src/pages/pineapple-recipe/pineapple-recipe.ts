import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';


/*
  Generated class for the PineappleRecipe page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pineapple-recipe',
  templateUrl: 'pineapple-recipe.html'
})
export class PineappleRecipePage {

  first: number = 50;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PineappleRecipePage');
  }

  click() {
  	this.navCtrl.push(HomePage);
  }

}
