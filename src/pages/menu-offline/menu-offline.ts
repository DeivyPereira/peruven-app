import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { IniciosesionPage } from '../iniciosesion/iniciosesion';
import { IniciosesionclientePage } from '../iniciosesioncliente/iniciosesioncliente';
import { RegistroPage } from '../registro/registro';
import { MapaPage } from "../mapa/mapa";
import { QrPage } from "../qr/qr";

/**
 * Generated class for the MenuOfflinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-offline',
  templateUrl: 'menu-offline.html',
})
export class MenuOfflinePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuOfflinePage');
  }

  goToQR(params){
    if (!params) params = {};   
    const alert = this.alertCtrl.create({
      title: 'Escanear QR',
      subTitle: 'Para rastrear su paquete es necesario escanear el código QR ubicado en la parte inferior de su boleta',
      buttons: ['Siguiente']
    });
    alert.present();
    this.navCtrl.push(QrPage);
  }
  
  goToIniciosesionTracking(params){
    if (!params) params = {};   
    this.navCtrl.push(IniciosesionclientePage);
  }
  
  goToIniciosesion(params){
    if (!params) params = {};   
    this.navCtrl.push(IniciosesionPage);
  }
  
  goToRegistro(params){
    if (!params) params = {};   
    this.navCtrl.push(RegistroPage);
  }
  goToMapa(params){
    if (!params) params = {};   
    this.navCtrl.push(MapaPage);
  }
}
