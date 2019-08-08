import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

/**
 * Generated class for the PublicidadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-publicidad',
  templateUrl: 'publicidad.html',
})
export class PublicidadPage {

  public data: any;
  public items: any;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.items = navParams.get("data");
  }

  ionViewDidLoad() {
    console.log('Entro a Package List')
    console.log(this.items)
  }
  atras(params) {
    this.viewCtrl.dismiss();
  }

}
