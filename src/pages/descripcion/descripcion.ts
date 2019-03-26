import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { TrackingPage } from '../tracking/tracking';

/**
 * Generated class for the DescripcionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-descripcion',
  templateUrl: 'descripcion.html',
})
export class DescripcionPage {
  data:any;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {
    this.data = navParams.get("data");
    this.data = this.data.items[0]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescripcionPage');
  }
  goToTrackingPage(params){
    if (!params) params = {};   
    this.navCtrl.push(TrackingPage);
  }
  atras(params) {
    this.viewCtrl.dismiss();
  }
}
