import { Component  } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  LoadingController,
  AlertController,
  ViewController
} from "ionic-angular";
import { DescripcionPage } from "../descripcion/descripcion";
import { TrackingPage } from "../tracking/tracking";
import { ApiProvider } from "../../providers/api/api";
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
  public data: any;
  public items: any;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public modalCtrl: ModalController,
    public api: ApiProvider,
    public loadingController: LoadingController) {
    this.getPedidos()
  }

  atras(params) {
    this.viewCtrl.dismiss();
  }

  goToPedidoPage(params) {
    console.log(params);
    if (!params) params = {};
    let items = {
      items: params
    }
    this.navCtrl.push(PedidoPage, {
      data: items
    });
  }

  goToMenuPage(params){
    if (!params) params = {};   
    this.navCtrl.push(MenuPage);
  }
  getPedidos() {
    let loading = this.loadingController.create({
      content: "Cargando..."
    });
    loading.present();
    this.api.get("ship-client").subscribe(
      jwt => {
        loading.dismiss();
        if (jwt) {
          this.items = jwt;
          if (this.items.status == true) {
            this.data = this.items.items
            
            console.log(this.data)
          } else {
            console.log('No Existe codigo')
          }
        } else {
          console.log("Error de Conexion");
        }
      },
      err => {
        console.log(err)
        loading.dismiss();
      }
    );
  }
}
