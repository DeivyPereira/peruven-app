import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { DetallepedidoPage } from '../detallepedido/detallepedido';

/**
 * Generated class for the PedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedido',
  templateUrl: 'pedido.html',
})
export class PedidoPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoPage');
  }
  atras(params) {
    this.viewCtrl.dismiss();
  }
  abrirmodal() {
    const modal = this.modalCtrl.create(DetallepedidoPage);
    modal.present();
  }

}
