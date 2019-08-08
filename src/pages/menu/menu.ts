import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ListapagosPage } from "../listapagos/listapagos";
import { ListapedidosPage } from "../listapedidos/listapedidos";
import { ConfigPage } from "../config/config";
import { ConfigclientPage } from "../configclient/configclient";
import { IniciosesionPage } from "../iniciosesion/iniciosesion";
import { SoportePage } from "../soporte/soporte";
import { MapaPage } from "../mapa/mapa";
import { TrackingPage } from "../tracking/tracking";
import { ApiProvider } from "../../providers/api/api";
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthProvider } from "../../providers/auth/auth";
import { UrlProvider } from "../../providers/url/url";
import { QrPage } from '../qr/qr';
import { Storage } from "@ionic/storage";
/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-menu",
  templateUrl: "menu.html"
})
export class MenuPage {
  public buttonClicked: boolean = true;
  loading: any;
  id: any;
  email: any;
  name: any;
  avatar: any;
  roles: any;
  role: number;
  decode: string;
  cargo: string;
  response: any;
  paso: boolean = false;
  change: boolean = false;
  list: any;
  pending: any;
  country: any;
  successful: any;
  logs: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public url: UrlProvider,
    public authProvider: AuthProvider,
    public api: ApiProvider,
    public jwtHelper: JwtHelperService,
    private readonly storage: Storage
  ) {
    this.authProvider.authUser.subscribe(jwt => {
      if (jwt) {
        let data = jwt;
        data = JSON.parse(data);
        const decoded = this.jwtHelper.decodeToken(jwt);
        this.decode = decoded;
        this.id = decoded.id;
        this.email = decoded.email;
        this.name = decoded.name;
        this.country = decoded.country;
        this.role = decoded.role;
        this.storage.set("id", decoded.id);
        this.storage.set("email", decoded.email);
        this.storage.set("name", decoded.name);
        this.storage.set("country", decoded.country);
        this.storage.set("role", decoded.role);
        this.storage.set("token", data.token);
        this.storage.set("jwt_token", jwt);
        console.log(data.token);
      } else {
        console.log("No Entro a JWT");
        this.roles = 0;
        this.name = "Testing";
      }
    });
  }
  public onButtonClick() {
    this.buttonClicked = !this.buttonClicked;
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad MenuPage");
  }
  goToLogout(params) {
    if (window.confirm("Seguro deseas salir del sistema?")) {
      this.authProvider.logout();
      this.storage.remove("jwt_token");
    }
  }
  goToListapagosPage(params) {
    if (!params) params = {};
    this.navCtrl.push(ListapagosPage);
  }
  goToListapedidosPage(params) {
    if (!params) params = {};
    this.navCtrl.push(ListapedidosPage);
  }
  goToConfigPage(params) {
    if (!params) params = {};
    this.navCtrl.push(ConfigPage);
  }
  goToConfigClientPage(params) {
    if (!params) params = {};
    this.navCtrl.push(ConfigclientPage);
  }
  goToMapaPage(params) {
    if (!params) params = {};
    this.navCtrl.push(MapaPage);
  }
  goToTrackingPage(params) {
    if (!params) params = {};
    this.navCtrl.push(QrPage);
  }
  goToSoporte(params) {
    if (!params) params = {};
    this.navCtrl.push(SoportePage);
  }
}
