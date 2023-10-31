import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/service/apiservice.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-liste-echeances',
  templateUrl: './liste-echeances.page.html',
  styleUrls: ['./liste-echeances.page.scss'],
})
export class ListeEcheancesPage implements OnInit {
  echeances:any;
  matricule !: any ;
  constructor(
    private service: ApiserviceService,
    private utilisateur: UtilisateurService,
    private router: Router) {}

  ngOnInit() {
    this.matricule=this.utilisateur.getMatricule();

    this.service.getEchancesSemaine(this.matricule).subscribe((data) => {
      this.echeances = data;
    });

  }
  demande(echeance: any){
    this.router.navigate(['/detail-clients', echeance.codeDemande]);
  }

}
