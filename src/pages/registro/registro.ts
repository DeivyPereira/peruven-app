import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  LoadingController,
  AlertController,
  ViewController
} from "ionic-angular";
import { IniciosesionclientePage } from '../iniciosesioncliente/iniciosesioncliente';
import { ApiProvider } from "../../providers/api/api";
import { AuthProvider } from "../../providers/auth/auth";
import { finalize } from "rxjs/operators/finalize";
/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  doc_types: any[] = [
    { value: "1", text: 'PTP' },
    { value: "2", text: 'DNI' },
    { value: "3", text: 'Pasaporte' },
    { value: "4", text: 'C.E.' },
    { value: "5", text: 'C.I.' }
  ];
  person = {
    shipper: "",
    doc_type: "",
    number: "",
    email: "",
    phone: "",
    password: ""
  };
  loading: any;
  items: any;
  button: boolean = true;
  public status: any;
  public errorMessage: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private readonly loadingController: LoadingController,
    public api: ApiProvider,
    private readonly authProvider: AuthProvider,
    public alertCtrl: AlertController,
    private readonly toastCtrl: ToastController,
    public viewCtrl: ViewController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }
  goToIniciosesion(params) {
    if (!params) params = {};
    this.navCtrl.push(IniciosesionclientePage);
  }
  Registro() {
    let loading = this.loadingController.create({
      content: "Cargando..."
    });
    loading.present();
    this.api.post("register", this.person).subscribe(
      jwt => {
        loading.dismiss();
        if (jwt) {
          this.items = jwt;
          if (this.items.status == true) {
            if (this.items.response == 2) {
              const alert = this.alertCtrl.create({
                title: 'Registrando Completado!',
                buttons: ['OK']
              });
              alert.present();
            }
            if (this.items.response == 1) {
              const alert = this.alertCtrl.create({
                title: 'Registro completado!',
                subTitle: 'Tienes encomiendas cargada a tu usuario, ingresa en pedidos para visalizarlas',
                buttons: ['OK']
              });
              alert.present();
            }
            let loading = this.loadingController.create({
              spinner: "bubbles",
              content: "Registrando....."
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
          } else {
            const alert = this.alertCtrl.create({
              subTitle: 'Al parecer ya estas registrado, ingresa sesión',
              buttons: ['Ok']
            });
            alert.present();
          }
        } else {
          const alert = this.alertCtrl.create({
            title: 'Problema!',
            subTitle: 'Hubo un problema al intentar agregar el estado, vuelve a intentarlo',
            buttons: ['Volver a Intentar']
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
  handleError(error: any) {
    console.log(error)
    let message: string;
    if (error.status && error.status === 401) {
      message = error.error;
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
  atras(params) {
    this.viewCtrl.dismiss();
  }
}
