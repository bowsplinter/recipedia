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
  first: number = 4;
  second: number = 5;
  third: number = 6;
  butter: number= 250;
  plainflour: number = 200;
  pineapples: number = 20;
  cloves: number = 10;
  sugar: number = 200;
  temperature: number = 150;
  cooktime: number = 150;
  index: number = 0;
  compareindex: number = 0;
  a1: any;
  a2: any;
  a3: any;
  a4: any;
  a5: any;
  a6: any;
  butterA: any;
  plainflourA: any;
  pineapplesA: any;
  clovesA: any;
  sugarA: any;
  temperatureA: any;
  cooktimeA: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.a1 = [1, 5, 5];
    this.a2= [2, 8, 3];
    this.a3=[3,6,9];
    this.a4= [5,2,4];
    this.a5= [8,9,1];
    this.a6= [9,1,6];
    this.butterA = [350,350,250,280,230,220];
    this.plainflourA = [500,510,365,400,400,390];
    this.pineapplesA = [4,3,2,2,2,2];
    this.clovesA = [1,0,7,0,0,4];
    this.sugarA = [300,250,200,400,400,250];
    this.temperatureA = [165,165,180,175,170,170];
    this.cooktimeA = [21,23,20,15,23,15];
    this.butter = this.butterA[this.index];
    this.plainflour = this.plainflourA[this.index];
    this.pineapples = this.pineapplesA[this.index];
    this.cloves = this.clovesA[this.index];
    this.sugar = this.sugarA[this.index];
    this.temperature = this.temperatureA[this.index];
    this.cooktime = this.cooktimeA[this.index];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PineappleTartsPage');

  }

  make() {
    this.navCtrl.push(PineappleRecipePage);
  }

  distance(x1, y1, z1, x2, y2, z2) {
    var d = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2) + (z1-z2)*(z1-z2));
    return d;
  }

  change() {
    var index = this.closest_distance(this.first, this.second, this.third);
    this.butter = this.butterA[index];
    this.plainflour = this.plainflourA[index];
    this.pineapples = this.pineapplesA[index];
    this.cloves = this.clovesA[index];
    this.sugar = this.sugarA[index];
    this.temperature = this.temperatureA[index];
    this.cooktime = this.cooktimeA[index];
    this.index = index;
  }

  save() {
    this.compareindex = this.index;
  }

  closest_distance(first, second, third) {
    var d1 = this.distance(first, second, third, this.a1[0], this.a1[1],this.a1[2]);
    var d2 = this.distance(first, second, third, this.a2[0], this.a2[1],this.a2[2]);
    var d3 = this.distance(first, second, third, this.a3[0], this.a3[1],this.a3[2]);
    var d4 = this.distance(first, second, third, this.a4[0], this.a4[1],this.a4[2]);
    var d5 = this.distance(first, second, third, this.a5[0], this.a5[1],this.a5[2]);
    var d6 = this.distance(first, second, third, this.a6[0], this.a6[1],this.a6[2]);
    var darr = [d1,d2,d3,d4,d5,d6];
    console.log(darr);
    console.log(this.indexOfMin(darr));
    return this.indexOfMin(darr);
  }

  indexOfMin(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var min = arr[0];
    var minIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            minIndex = i;
            min = arr[i];
        }
    }

    return minIndex;
}

}
