import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { MyApp } from "./app.component";
import { Storage, IonicStorageModule } from "@ionic/storage";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
// Paginas
import { HomePage } from "../pages/home/home";
import { IniciosesionPage } from "../pages/iniciosesion/iniciosesion";
import { RegistroPage } from "../pages/registro/registro";
import { MenuPage } from "../pages/menu/menu";
import { DetallepedidoPage } from "../pages/detallepedido/detallepedido";
import { ListapagosPage } from "../pages/listapagos/listapagos";
import { ListapedidosPage } from "../pages/listapedidos/listapedidos";
import { PedidoPage } from "../pages/pedido/pedido";
import { DescripcionPage } from "../pages/descripcion/descripcion";
import { DetalletrackingPage } from "../pages/detalletracking/detalletracking";
import { FormularioPage } from "../pages/formulario/formulario";
import { MapaPage } from "../pages/mapa/mapa";
import { QrPage } from "../pages/qr/qr";
import { TrackingPage } from "../pages/tracking/tracking";
import { ConfigPage } from "../pages/config/config";
import { SoportePage } from "../pages/soporte/soporte";
import { ConfigclientPage } from "../pages/configclient/configclient";
import { IniciosesiontrackingPage } from "../pages/iniciosesiontracking/iniciosesiontracking";
import { IniciosesionclientePage } from "../pages/iniciosesioncliente/iniciosesioncliente";
import { MenuOfflinePage } from "../pages/menu-offline/menu-offline";
//Plugins
import { Geolocation } from "@ionic-native/geolocation";
import { Camera } from "@ionic-native/camera";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { OneSignal } from '@ionic-native/onesignal';
//Proveedores
import { AuthProvider } from "../providers/auth/auth";
import { InterceptorProvider } from "../providers/interceptor/interceptor";
import { ApiProvider } from "../providers/api/api";
import { UrlProvider } from "../providers/url/url";
import { JwtModule, JWT_OPTIONS } from "@auth0/angular-jwt";
export function jwtOptionsFactory(storage) {
  return {
    tokenGetter: () => {
      return storage.get("jwt_token");
    }
  };
}
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
    IniciosesiontrackingPage,
    IniciosesionclientePage,
    SoportePage,
    ConfigclientPage,
    MenuOfflinePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Storage]
      }
    }),
    IonicStorageModule.forRoot()
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
    IniciosesiontrackingPage,
    IniciosesionclientePage,
    SoportePage,
    ConfigclientPage,
    MenuOfflinePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    Camera,
    BarcodeScanner,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorProvider,
      multi: true
    },
    ApiProvider,
    UrlProvider,
    AuthProvider,
    InterceptorProvider,
    OneSignal
  ]
})
export class AppModule {}