import { Component, OnInit,AfterViewInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/service/apiservice.service';
import * as Leaflet from 'leaflet';

import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-nouveau-client',
  templateUrl: './nouveau-client.page.html',
  styleUrls: ['./nouveau-client.page.scss'],
})
export class NouveauClientPage implements OnInit,AfterViewInit {
  tep: any = 1;
  prospectForm!: FormGroup;
  map!: Leaflet.Map;

  coordonneesClient!: Leaflet.LatLng;

  codeProspect: any;
  matricule!: any;

  constructor(
    private formBuilder: FormBuilder,
    private service: ApiserviceService,
    private utilisateur: UtilisateurService,
    private router: Router
  ) {
    this.prospectForm = this.formBuilder.group({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      dateNaissanceClient: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required]),
      sexe: new FormControl('', [Validators.required]),
      numeroCNI: new FormControl('', [Validators.required]),
      profession: new FormControl('', [Validators.required]),
      residence: new FormControl('', [Validators.required]),
      ville: new FormControl('', [Validators.required]),
      quartier: new FormControl('', [Validators.required]),
      longitude: new FormControl('', [Validators.required]),
      lattitude: new FormControl('', [Validators.required]),
      libelleDemande: new FormControl('', [Validators.required]),
      montant: new FormControl('', [Validators.required]),
      duree: new FormControl('', [Validators.required]),
      dateDemande: new FormControl('', [Validators.required]),
    });
  }

   onMapReady() {
    this.map = new Leaflet.Map('map').setView([4.0266, 9.7312], 13);
    Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{
      maxZoom: 20,
      tileSize: 512,
      zoomOffset: -1,
      attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);
    if (!navigator.geolocation) {
      console.log(' la geolocalisation n est pas active ');
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {

        console.log(
          `lat :${position.coords.latitude}, long: ${position.coords.longitude}`
        );
        var locationCircle = Leaflet.circle([position.coords.latitude, position.coords.longitude], {
          color: 'red',
          fillColor: '#f03',
          fillOpacity: 0.5,
          radius: 500,
        }).addTo(this.map);
        const marker1 = Leaflet.marker([position.coords.latitude, position.coords.longitude], {
          draggable: true,
        });
        marker1.bindPopup(`<p> Vous etes ici, Lattitude: ${position.coords.latitude} , Longitude ${position.coords.longitude} </p>`);
        this.map.addLayer(marker1);


      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit() {
    this.matricule = this.utilisateur.getMatricule();
  }

  ngAfterViewInit(){
    this.onMapReady();
  }

  onSubmit(): void {
    if( this.prospectForm.invalid){
      console.log( " Une erreur est survenue")
    }
    else if (this.prospectForm.valid) {
      this.service.enrolProspect_demande(this.prospectForm.value, this.matricule).subscribe(res=>{

        console.log("l'enregistrement du prospect ");
        this.prospectForm.reset();
      })

    }
  }


  retour() {
    this.router.navigate(['/dashboard-user/dashboard-user/liste-clients']);
  }
}
