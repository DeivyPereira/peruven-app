import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { QrPage } from '../qr/qr';
import { DetallepedidoPage } from '../detallepedido/detallepedido';
import { PedidoPage } from '../pedido/pedido';
import { FormularioPage } from '../formulario/formulario';
import { DescripcionPage } from "../descripcion/descripcion";
import { DetalletrackingPage } from '../detalletracking/detalletracking';
import { Storage } from "@ionic/storage";
import { RegistroPage } from '../registro/registro';
/**
 * Generated class for the TrackingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracking',
  templateUrl: 'tracking.html',
})
export class TrackingPage {
  public data: any;
  public isPublic: any = true;
  public role: any;
  constructor(public navCtrl: NavController, 
    private readonly storage: Storage, public viewCtrl: ViewController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.data = navParams.get("data");
  }

  ionViewWillEnter() {
    this.storage.get("role").then(val => {
      this.role = val
      if(this.role!= 'Cliente'){
        this.isPublic = false;
      }
    });
    console.log(this.role)
    console.log(this.isPublic)
  }
  ionViewDidLoad() {
    console.log('Entro a tracking nuevo')
    console.log(this.data)
  }
  atras(params) {
    this.viewCtrl.dismiss();
  }

  goToRegistro(params) {
    if (!params) params = {};
    this.navCtrl.push(RegistroPage);
  }
  goToQrPage(params) {
    if (!params) params = {};
    this.navCtrl.push(QrPage);
  }

  goToPedidoPage(params) {
    console.log(this.data);
    if (!params) params = {};
    this.navCtrl.push(PedidoPage, {
      data: this.data
    });
  }

  goToDetalletrackingPage() {
    console.log(this.data)
    const modal = this.modalCtrl.create(DetallepedidoPage, {
      data: this.data.items
    });
    modal.present();
  }

  goToFormularioPage() {
    console.log(this.data)
    const modal = this.modalCtrl.create(FormularioPage, {
      data: this.data.items
    });
    modal.present();
  }

  goToPackageList() {
    console.log(this.data)
    const modal = this.modalCtrl.create(DetalletrackingPage, {
      data: this.data.items
    });
    modal.present();
  }
  
}
