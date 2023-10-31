import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/service/apiservice.service';

import * as Leaflet from 'leaflet';
import 'leaflet-routing-machine';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin-localiser-client',
  templateUrl: './admin-localiser-client.page.html',
  styleUrls: ['./admin-localiser-client.page.scss'],
})
export class AdminLocaliserClientPage implements OnInit {
  lattitude: number=4.0266;
  longitude : number=9.7312;


  map!: Leaflet.Map;
  coordonneesClient!: Leaflet.LatLng;

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiservice:ApiserviceService,
    private authservice: AuthService
  ) { }

  ngOnInit() {
  }
  ionViewDidEnter(){
    this.LeafletMap();
    const codeProspect=this.activatedRoute.snapshot.paramMap.get('id');
    this.apiservice.localisationProspect(Number(codeProspect)).subscribe((res)=>{
      console.log(res);
      this.coordonneesClient=new Leaflet.LatLng(res[0].lattitude,res[0].longitude )
      console.log("les coordonnees sont",res[0].lattitude , res[0].longitude);
      this.initRoutingMachine();
    });
  }

  LeafletMap(){
    navigator.geolocation.getCurrentPosition((position)=>{
      this.lattitude=position.coords.latitude;
      this.longitude=position.coords.longitude;
      console.log(`lat: ${this.lattitude} --- long:${this.longitude}`);

    },(err)=>{
      console.log(err);
    });

    this.map= new Leaflet.Map('map').setView([this.lattitude, this.longitude], 13);
    Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
      maxZoom: 20,
      tileSize: 512,
      zoomOffset: -1,
      attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

  }
  deconnexion(){
    this.authservice.deconnexion();
  }

  initRoutingMachine(){
    Leaflet.Routing.control({
      waypoints:[
        Leaflet.latLng(this.lattitude, this.longitude),
        this.coordonneesClient
      ],
      routeWhileDragging: true,
      fitSelectedRoutes:true,
      showAlternatives:false,

    }).addTo(this.map)
  }


}
