import { Component  } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PedidoPage } from '../pedido/pedido';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the ListapedidosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listapedidos',
  templateUrl: 'listapedidos.html',
})
export class ListapedidosPage {

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListapedidosPage');
  }
  atras(params) {
    this.viewCtrl.dismiss();
  }

  goToPedidoPage(params){
    if (!params) params = {};   
    this.navCtrl.push(PedidoPage);
  }

  goToMenuPage(params){
    if (!params) params = {};   
    this.navCtrl.push(MenuPage);
  }
}
