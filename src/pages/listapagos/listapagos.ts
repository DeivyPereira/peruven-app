import { Component  } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';


/**
 * Generated class for the ListapagosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listapagos',
  templateUrl: 'listapagos.html',
})
export class ListapagosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListapagosPage');
  }
  atras(params) {
    this.viewCtrl.dismiss();
  }

  goToMenuPage(params){
    if (!params) params = {};   
    this.navCtrl.push(MenuPage);
  }
}
