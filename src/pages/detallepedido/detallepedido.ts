import { Component } from '@angular/core';
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
/**
/**
 * Generated class for the DetallepedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detallepedido',
  templateUrl: 'detallepedido.html',
})
export class DetallepedidoPage {
  public data: any;
  public items: any;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public modalCtrl: ModalController,
    public api: ApiProvider,
    public loadingController: LoadingController) {
    this.data = navParams.get("data");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallepedidoPage');
    console.log(this.data)
    this.Realizar()
  }
  atras(params) {
    this.viewCtrl.dismiss();
  }
  Realizar() {
    let loading = this.loadingController.create({
      content: "Cargando..."
    });
    loading.present();
    this.api.get("tracking-timeline/" + this.data.id).subscribe(
      jwt => {
        loading.dismiss();
        if (jwt) {
          this.items = jwt;
          if (this.items.status == true) {
            console.log(this.items.data)
            this.items = this.items.data
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
