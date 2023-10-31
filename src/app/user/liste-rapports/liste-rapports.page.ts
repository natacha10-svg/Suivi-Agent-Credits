import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/service/apiservice.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-liste-rapports',
  templateUrl: './liste-rapports.page.html',
  styleUrls: ['./liste-rapports.page.scss'],
})
export class ListeRapportsPage implements OnInit {
  matricule!: string;
  rapports: any ;

  constructor(
    private utilisateur: UtilisateurService,
    private service: ApiserviceService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.service.rapportAjoute$.subscribe(() => {
      this.listeRapports(); // Mettre à jour la liste des rapports lorsqu'un nouveau rapport est ajouté
    });
    this.listeRapports();

  }

  listeRapports(){
    this.matricule=this.utilisateur.getMatricule();
    console.log( this.matricule);
    this.service.listeRapport(this.matricule).subscribe((data)=>{
      this.rapports=data;
      console.log(" la liste des rapports a bien ete recupere");
    },
    (error)=>{
      console.error('Erreur lors du chargement de la liste des rapports', error);
    });

  }
  gotoRapport(){
    this.router.navigate(["/nouveau-rapport"])
  }

  visualiser( codeRapport : any){
    this.service.visualiserRapport(codeRapport).subscribe((res)=>{
    });
  }

}
