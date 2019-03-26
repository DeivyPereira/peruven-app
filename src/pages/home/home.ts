import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IniciosesionPage } from '../iniciosesion/iniciosesion';
import { RegistroPage } from '../registro/registro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToIniciosesion(params){
    if (!params) params = {};   
    this.navCtrl.push(IniciosesionPage);
  }
  
  goToRegistro(params){
    if (!params) params = {};   
    this.navCtrl.push(RegistroPage);
  }
  
}
