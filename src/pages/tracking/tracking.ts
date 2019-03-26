import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { QrPage } from '../qr/qr';
import { DetalletrackingPage } from '../detalletracking/detalletracking';
import { FormularioPage } from '../formulario/formulario';
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

  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackingPage');
  }
  atras(params) {
    this.viewCtrl.dismiss();
  }

  goToQrPage(params){
    if (!params) params = {};   
    this.navCtrl.push(QrPage);
  }  

  goToDetalletrackingPage(params){
    if (!params) params = {};   
    this.navCtrl.push(DetalletrackingPage);
  } 
  goToFormularioPage() {
    const modal = this.modalCtrl.create(FormularioPage);
    modal.present();
  }
}
