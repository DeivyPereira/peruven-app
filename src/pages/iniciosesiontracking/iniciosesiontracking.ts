import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  LoadingController,
  AlertController,
  ViewController,
  ToastController
} from "ionic-angular";
import { RegistroPage } from "../registro/registro";
import { MenuPage } from "../menu/menu";
import { AuthProvider } from "../../providers/auth/auth";
import { finalize } from "rxjs/operators/finalize";
import { ApiProvider } from "../../providers/api/api";

/**
 * Generated class for the IniciosesiontrackingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-iniciosesiontracking',
  templateUrl: 'iniciosesiontracking.html',
})
export class IniciosesiontrackingPage {
  authType: string = "login";
  person = {
    user:"",
  };
  code: any;
  data: any;
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
    public api: ApiProvider,
    public loadingController: LoadingController,
    public alertCtrl: AlertController,
    public viewCtrl: ViewController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad IniciosesionPage");
  }
  Realizar() {
    let loading = this.loadingController.create({
      content: "Cargando..."
    });
    loading.present();
    let person = {
      tracking: this.code
    };
    this.api.post("tracking-for-tracking/", person).subscribe(
      jwt => {
        loading.dismiss();
        if (jwt) {
          this.data = jwt;
          if(this.data.status==true){
            console.log(this.data)
          }else{
            const alert = this.alertCtrl.create({
              title: 'Tracking no encontrado',
              subTitle: 'No se pudo localizar el Tracking, vuelve a intentarlo.',
              buttons: ['OK']
            });
            alert.present();
          }
        } else {
          const alert = this.alertCtrl.create({
            title: 'Tracking no encontrado',
            subTitle: 'No se pudo localizar el Tracking, vuelve a intentarlo.',
            buttons: ['OK']
          });
          alert.present();
        }
      },
      err => {
        console.log(err)
        loading.dismiss();
      }
    );
  }
  goToLogin() {
    this.button = false;
    let loading = this.loadingCtrl.create({
      spinner: "bubbles",
      content: "Logging in ..."
    });
    loading.present();
    this.authProvider
      .loginclient(this.person)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe(
        () => {},
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
}
