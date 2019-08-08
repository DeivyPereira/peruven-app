import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController,LoadingController,AlertController } from 'ionic-angular';
import { ApiProvider } from "../../providers/api/api";
/**
 * Generated class for the FormularioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {
  public data: any;
  public items: any;
  public location: any;
  public description: any;
  private states: any[] = [
    'Origen',
    'Almacén',
    'Carga Aeropuertaria',
    'En Transito',
    'Pais de Destino',
    'Desembarque de paquete',
    'Almacen de Tealca',
    'Distribucción de Tealca',
    'Oficina de Tealca',
    'En Destino final',
    'Devolución',
    'Error',
    'Rechazado',
    'Por verificar'
  ];
  constructor(public navCtrl: NavController, public viewCtrl: ViewController, public navParams: NavParams, public modalCtrl: ModalController,
    public api: ApiProvider,
    public loadingController: LoadingController,
    public alertCtrl: AlertController) {
    this.data = navParams.get("data");
    console.log(this.data)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }
  atras(params) {
    this.viewCtrl.dismiss();
  }
  Realizar() {
   let sav = {
      description: this.description,
      location: this.location,
      lat: 0,
      lng: 0,
      ship_order_id: this.data.id
    };
    let loading = this.loadingController.create({
      content: "Cargando..."
    });
    loading.present();
    this.api.post("tracking-timeline/" + this.data.id, sav).subscribe(
      jwt => {
        loading.dismiss();
        if (jwt) {
          this.items = jwt;
          if (this.items.status == true) {
            const alert = this.alertCtrl.create({
              title: 'Estado Agregado',
              subTitle: 'Se agrego el estado correctamente',
              buttons: ['OK']
            });
            alert.present();
            this.viewCtrl.dismiss();
          } else {
            const alert = this.alertCtrl.create({
              title: 'Problema!',
              subTitle: 'Hubo un problema al intentar agregar el estado, vuelve a intentarlo',
              buttons: ['Volver a Intentar']
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
}
