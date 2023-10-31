import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/service/apiservice.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-liste-impayes',
  templateUrl: './liste-impayes.page.html',
  styleUrls: ['./liste-impayes.page.scss'],
})
export class ListeImpayesPage implements OnInit {
  matricule !: string ;
  statut: string = "impaye";
  impayes: any;

  constructor(
    private service: ApiserviceService,
    private utilisateur: UtilisateurService,
    private router: Router
  ) { }

  ngOnInit() {
    this.matricule=this.utilisateur.getMatricule();
    this.getImpayes();

  }
  getImpayes(){
    this.service.getImpayes(this.matricule).subscribe((data)=>{
      this.impayes=data;
      console.log(" les donnees ont bien ete recuperer");

    })
  }
  demande(echeance: any){
    this.router.navigate(['/detail-clients', echeance.codeDemande]);
  }

}
