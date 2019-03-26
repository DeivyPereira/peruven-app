import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { RegistroPage } from '../registro/registro';
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the IniciosesionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-iniciosesion',
  templateUrl: 'iniciosesion.html',
})
export class IniciosesionPage {
 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IniciosesionPage');
  }
  goToRegistro(params){
    if (!params) params = {};   
    this.navCtrl.push(RegistroPage);
  }
  goToMenu(params){
    if (!params) params = {};   
    this.navCtrl.push(MenuPage);
  }
}
