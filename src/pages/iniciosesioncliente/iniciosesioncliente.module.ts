import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IniciosesionclientePage } from './iniciosesioncliente';

@NgModule({
  declarations: [
    IniciosesionclientePage,
  ],
  imports: [
    IonicPageModule.forChild(IniciosesionclientePage),
  ],
})
export class IniciosesionclientePageModule {}
