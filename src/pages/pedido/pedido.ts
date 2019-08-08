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
  public data: any;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.data = navParams.get("data");
    this.data = this.data.items;
  }

  ionViewDidLoad() {
    console.log('Entro a Pedido')
    console.log(this.data)
  }
  atras(params) {
    this.viewCtrl.dismiss();
  }
  goToDetalletrackingPage() {
    console.log(this.data)
    const modal = this.modalCtrl.create(DetallepedidoPage, {
      data: this.data
    });
    modal.present();
  }
}
