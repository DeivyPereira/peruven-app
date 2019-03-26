import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IniciosesionPage } from '../pages/iniciosesion/iniciosesion';
import { RegistroPage } from '../pages/registro/registro';
import { MenuPage } from '../pages/menu/menu';
import { DetallepedidoPage } from '../pages/detallepedido/detallepedido';
import { ListapagosPage } from '../pages/listapagos/listapagos';
import { ListapedidosPage } from '../pages/listapedidos/listapedidos';
import { PedidoPage } from '../pages/pedido/pedido';
import { DescripcionPage } from '../pages/descripcion/descripcion';
import { DetalletrackingPage } from '../pages/detalletracking/detalletracking';
import { FormularioPage } from '../pages/formulario/formulario';
import { MapaPage } from '../pages/mapa/mapa';
import { QrPage } from '../pages/qr/qr';
import { TrackingPage } from '../pages/tracking/tracking';
import { ConfigPage } from '../pages/config/config';
import { ApiProvider } from '../providers/api/api';
import { UrlProvider } from '../providers/url/url';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapaPage,
    QrPage,
    TrackingPage,
    DescripcionPage,
    DetalletrackingPage,
    FormularioPage,
    IniciosesionPage,
    RegistroPage,
    MenuPage,
    ConfigPage,
    PedidoPage,
    ListapedidosPage,
    ListapagosPage,
    DetallepedidoPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapaPage,
    QrPage,
    TrackingPage,
    DescripcionPage,
    DetalletrackingPage,
    FormularioPage,
    IniciosesionPage,
    RegistroPage,
    MenuPage,
    ConfigPage,
    PedidoPage,
    ListapedidosPage,
    ListapagosPage,
    DetallepedidoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    UrlProvider
  ]
})

export class AppModule {}
