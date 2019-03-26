import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IniciosesionPage } from './iniciosesion';

@NgModule({
  declarations: [
    IniciosesionPage,
  ],
  imports: [
    IonicPageModule.forChild(IniciosesionPage),
  ],
})
export class IniciosesionPageModule {}
