import { Component, ViewChild } from "@angular/core";
import { Nav, Platform, App, AlertController,ModalController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { HomePage } from "../pages/home/home";
import { MenuPage } from "../pages/menu/menu";
import { AuthProvider } from "../providers/auth/auth";
import { OneSignal } from "@ionic-native/onesignal";
import { PedidoPage } from "../pages/pedido/pedido";
import { PublicidadPage } from "../pages/publicidad/publicidad";
@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    authProvider: AuthProvider,
    private oneSignal: OneSignal,
    public modalCtrl: ModalController
  ) {
    this.initializeApp();
    authProvider.checkLogin();
    authProvider.authUser.subscribe(jwt => {
      if (jwt) {
        this.rootPage = MenuPage;
      } else {
        this.rootPage = HomePage;
      }
    });
  }
  initializeApp() {
    this.platform.ready().then(() => {
      setTimeout(() => {
        this.splashScreen.hide();
      }, 100);
      if (this.platform.is("cordova")) {
     // if (this.platform.is("core")) {
        console.log('Entro a Push')
        this.oneSignal.startInit(
          "897fd2e6-9002-47fd-93b6-f4b3a1ba73a8",
          "316322543035"
        );
        this.oneSignal.inFocusDisplaying(
          this.oneSignal.OSInFocusDisplayOption.InAppAlert
        );
        this.oneSignal.handleNotificationReceived().subscribe(data => {
          console.log(JSON.stringify(data));
          // do something when notification is received
        });
        this.oneSignal.handleNotificationOpened().subscribe((data) => {
          // Abrio la aplicación por primera vez o tienes la pantalla abierta 
          // se muestra inFocusDisplay y luego este
          let dat = data;
          let seccion= dat.notification.payload.additionalData.seccion;
          let info= dat.notification.payload.additionalData.data;
          switch (seccion){
            case "pedido":
              this.nav.push(PedidoPage,{data: info});
              break;
            case "publicidad":
              const modal = this.modalCtrl.create(PublicidadPage, {
                data: info
              });
              modal.present();
              break;
          }
        });
        this.oneSignal.endInit();
      }
    });
  }
}
