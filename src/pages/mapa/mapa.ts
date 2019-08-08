import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController,
  LoadingController
} from "ionic-angular";
import { Geolocation, Geoposition } from "@ionic-native/geolocation";
import { MenuPage } from "../menu/menu";
import { ApiProvider } from "../../providers/api/api";

/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google;

@IonicPage()
@Component({
  selector: "page-mapa",
  templateUrl: "mapa.html"
})
export class MapaPage {
  map: any;
  markersM: any= [];
  markers: any;
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    private geolocation: Geolocation,
    public api: ApiProvider,
    public loadingController: LoadingController
  ) {}

  atras(params) {
    this.viewCtrl.dismiss();
  }

  goToMenuPage(params) {
    if (!params) params = {};
    this.navCtrl.push(MenuPage);
  }

  ionViewDidLoad() {
    this.getPosition();
  }

  getPosition(): any {
    this.geolocation
      .getCurrentPosition()
      .then(response => {
        this.loadMap(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  loadMap(position: Geoposition) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude, longitude);

    // create a new map by passing HTMLElement
    let mapEle: HTMLElement = document.getElementById("map");

    // create LatLng object
    let myLatLng = { lat: latitude, lng: longitude };

    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });

    google.maps.event.addListenerOnce(this.map, "idle", () => {
      let marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: "Mi Posición"
      });
      mapEle.classList.add("show-map");
    });

    this.Realizar()
  }

  addMarker(options) {
    console.log(options)
    var myLatlng = new google.maps.LatLng(options.geoLat, options.geoLong);
    var contentString = '<p style="font-size:14px;">' + options.name + "</p>";
    let infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    google.maps.event.addListenerOnce(infowindow, "domready", () => {
      document.getElementById("myid").addEventListener("click", () => {
        // this.calculateRoute(options.geoLat, options.geoLong);
      });
    });
    let marker = new google.maps.Marker({
      position: myLatlng,
      map: this.map,
      title: options.name
    });
    marker.addListener("click", function() {
      infowindow.open(this.map, marker);
    });
    console.log(marker)
    this.markers.push(marker);
    console.log(this.markers)
  }
  Realizar() {
    this.api.get("mapageneral").subscribe(
      jwt => {
        console.log("Cargando Markers");
        if (jwt) {
          this.markersM = jwt;
          this.markersM = this.markersM.response;
          this.markersM.forEach(marker => {
            this.addMarker(marker);
          });
        } else {
          console.log("Error de Conexion");
        }
      },
      err => {
        console.log("Error al cargar Markers");
      }
    );
  }
}
