import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  LoadingController
} from "ionic-angular";
import { RegistroPage } from "../registro/registro";
import { MenuPage } from "../menu/menu";
import { AuthProvider } from "../../providers/auth/auth";
import { finalize } from "rxjs/operators/finalize";
import { OneSignal } from "@ionic-native/onesignal";
import { ViewController } from 'ionic-angular';
/**
 * Generated class for the IniciosesionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-iniciosesion",
  templateUrl: "iniciosesion.html"
})
export class IniciosesionPage {
  authType: string = "login";
  person = {
    user: "",
    password:"",
    oneSignal:{}
  };
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
      content: "Logging in ..."
    });
    loading.present();
    this.authProvider
      .login(this.person)
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
    let message: string;
    if (error.status && error.status === 401) {
      message = error.error;
    } else {
      message = "Complete todos los campos";
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
