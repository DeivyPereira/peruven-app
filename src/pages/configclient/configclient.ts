import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  LoadingController,
  AlertController,
  ViewController
} from "ionic-angular";
import { ApiProvider } from "../../providers/api/api";
import { MenuPage } from '../menu/menu';

/**
 * Generated class for the ConfigPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configclient',
  templateUrl: 'configclient.html',
})
export class ConfigclientPage {
  public data: any;
  public items: any;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public modalCtrl: ModalController,
    public api: ApiProvider,
    public loadingController: LoadingController,
    public alertCtrl: AlertController) {
    this.getUser()
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DetallepedidoPage');
  }
  atras(params) {
    this.viewCtrl.dismiss();
  }
  
  getUser() {
    console.log('Entro a buscar usuario')
    let loading = this.loadingController.create({
      content: "Cargando..."
    });
    loading.present();
    this.api.get("getclient").subscribe(
      jwt => {
        loading.dismiss();
        if (jwt) {
          this.items = jwt;
          if (this.items.status == true) {
            console.log(this.items.data)
            this.data = this.items.data
          } else {
            console.log('No Existe codigo')
          }
        } else {
          console.log("Error de Conexion");
        }
      },
      err => {
        console.log(err)
        loading.dismiss();
      }
    );
  }
  Realizar() {
    let sav = {
      shipper: this.data.shipper,
      phone: this.data.phone,
      country: this.data.country,
      password: this.data.password
     };
     let loading = this.loadingController.create({
       content: "Cargando..."
     });
     loading.present();
     this.api.put("clients/" + this.data.id, sav).subscribe(
       jwt => {
         loading.dismiss();
         if (jwt) {
           this.items = jwt;
           if (this.items.status == true) {
             const alert = this.alertCtrl.create({
               title: 'Datos Modificados',
               buttons: ['OK']
             });
             alert.present();
             this.viewCtrl.dismiss();
           } else {
             const alert = this.alertCtrl.create({
               title: 'Problema!',
               subTitle: 'Hubo un problema al intentar modificar los datos, vuelve a intentarlo',
               buttons: ['Volver a Intentar']
             });
             alert.present();
           }
         } else {
           const alert = this.alertCtrl.create({
             title: 'Problema!',
             subTitle: 'Hubo un problema al intentar modificar los datos, vuelve a intentarlo',
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

}
