import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  LoadingController,
  ViewController
} from "ionic-angular";
import { RegistroPage } from "../registro/registro";
import { MenuPage } from "../menu/menu";
import { AuthProvider } from "../../providers/auth/auth";
import { finalize } from "rxjs/operators/finalize";
import { OneSignal } from "@ionic-native/onesignal";
/**
 * Generated class for the IniciosesionclientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-iniciosesioncliente',
  templateUrl: 'iniciosesioncliente.html',
})
export class IniciosesionclientePage {
  authType: string = "login";
  person = {
    number: "",
    password:"",
    doc_type:"",
    oneSignal:{}
  };
   doc_types: any[] = [
    { value: "1", text: 'PTP' },
    { value: "2", text: 'DNI' },
    { value: "3", text: 'Pasaporte' },
    { value: "4", text: 'C.E.' },
    { value: "5", text: 'C.I.' }    
  ];
  loading: any;
  button: boolean = true;
  public status: any;
  public errorMessage: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private readonly loadingCtrl: LoadingController,
    private readonly authProvider: AuthProvider,
    private readonly toastCtrl: ToastController,
    private oneSignal: OneSignal,
    public viewCtrl: ViewController
  ) { }
  ionViewDidLoad() {
    console.log("ionViewDidLoad IniciosesionPage");
  }
  ionViewWillLoad() {
    this.oneSignal.getIds().then(data => {
      this.person.oneSignal = data
    })
  }

  goToLogin() {
    // this.button = false;
    let loading = this.loadingCtrl.create({
      spinner: "bubbles",
      content: "Iniciando Sesión ..."
    });
    loading.present();
    this.authProvider
      .loginclient(this.person)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(
        () => { },
        err => {
          console.log(err);
          this.button = true;
          this.handleError(err);
        }
      );
  }
  handleError(error: any) {
    var errores = JSON.parse(error.error);
    let message: string;
    console.log(error)
    console.log(error.status)
    console.log(error.error)
    console.log(errores)
    if (errores.msg ) {
      message = errores.msg;
    } else {
      message = "Hubo un problema vuelve a intentarlo";
    }
    const toast = this.toastCtrl.create({
      message,
      duration: 5000,
      position: "bottom"
    });
    toast.present();
  }
  goToRegistro(params) {
    if (!params) params = {};
    this.navCtrl.push(RegistroPage);
  }
  goToMenu(params) {
    if (!params) params = {};
    this.navCtrl.push(MenuPage);
  }
  atras(params) {
    this.viewCtrl.dismiss();
  }
}
