import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListapagosPage } from '../listapagos/listapagos';
import { ListapedidosPage } from '../listapedidos/listapedidos';
import { ConfigPage } from '../config/config';
import { IniciosesionPage } from '../iniciosesion/iniciosesion';
import { MapaPage } from '../mapa/mapa';
import { TrackingPage } from '../tracking/tracking';
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  public buttonClicked: boolean = true; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  

  public onButtonClick() {
    this.buttonClicked = !this.buttonClicked;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
  goToIniciosesionPage(params){
    if (!params) params = {};   
    this.navCtrl.push(IniciosesionPage);
  }
  goToListapagosPage(params){
    if (!params) params = {};   
    this.navCtrl.push(ListapagosPage);
  }
  goToListapedidosPage(params){
    if (!params) params = {};   
    this.navCtrl.push(ListapedidosPage);
  }
  goToConfigPage(params){
    if (!params) params = {};   
    this.navCtrl.push(ConfigPage);
  }
  goToMapaPage(params){
    if (!params) params = {};   
    this.navCtrl.push(MapaPage);
  }
  goToTrackingPage(params){
    if (!params) params = {};   
    this.navCtrl.push(TrackingPage);
  }
}
