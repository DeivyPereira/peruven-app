import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuOfflinePage } from './menu-offline';

@NgModule({
  declarations: [
    MenuOfflinePage,
  ],
  imports: [
    IonicPageModule.forChild(MenuOfflinePage),
  ],
})
export class MenuOfflinePageModule {}
