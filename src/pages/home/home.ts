import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuOfflinePage } from '../menu-offline/menu-offline';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToMenu(params){
    if (!params) params = {};   
    this.navCtrl.push(MenuOfflinePage);
  }
}
