import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { DetallepedidoPage } from '../detallepedido/detallepedido';
/**
 * Generated class for the DetalletrackingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalletracking',
  templateUrl: 'detalletracking.html',
})
export class DetalletrackingPage {
  public data: any;
  public items: any;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.data = navParams.get("data");
    this.items = this.data.products;
  }

  ionViewDidLoad() {
    console.log('Entro a Package List')
    console.log(this.items)
  }
  atras(params) {
    this.viewCtrl.dismiss();
  }

}
