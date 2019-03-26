import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  LoadingController,
  AlertController
} from "ionic-angular";
import { DescripcionPage } from "../descripcion/descripcion";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { ApiProvider } from "../../providers/api/api";
/**
 * Generated class for the QrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-qr",
  templateUrl: "qr.html"
})
export class QrPage {
  public scannedText: string;
  public buttonText: string;
  classIcon: any;
  public loading: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private _barcodeScanner: BarcodeScanner,
    public api: ApiProvider,
    public loadingController: LoadingController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad QrPage");
    this.classIcon = "fa fa-qrcode";
    this.buttonText = "Scan";
    this.loading = false;
  }

  goToDescripcionPage(data) {
    const modal = this.modalCtrl.create(DescripcionPage, {
      data: data
    });
    modal.present();
  }

  public scanQR() {
    this.buttonText = "Cargando..";
    this.loading = true;
    this.classIcon = "fas fa-spinner fa-spin";
    this._barcodeScanner.scan().then(
      barcodeData => {
        if (barcodeData.cancelled) {
          console.log("Usuario cancelo scaneo.");
          this.buttonText = "Scan";
          this.loading = false;
          return false;
        }
        console.log("Scaneo Exitoso.!");
        console.log(barcodeData.text);
        this.classIcon = "fa fa-qrcode";
        this.buttonText = "Scan";
        this.Realizar(barcodeData.text);
      },
      err => {
        console.log(err);
        this.classIcon = "fa fa-qrcode";
        this.loading = false;
        return false;
      }
    );
  }
  Realizar(code) {
    let loading = this.loadingController.create({
      content: "Cargando..."
    });
    loading.present();
    this.api.get("ship-order/" + code).subscribe(
      jwt => {
        loading.dismiss();
        if (jwt) {
          let data = jwt;
          this.goToDescripcionPage(data);
        } else {
          console.log("Error de Conexion");
        }
      },
      err => {
        loading.dismiss();
      }
    );
  }
}
