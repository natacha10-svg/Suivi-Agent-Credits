import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/service/apiservice.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';
import { Client } from 'src/clients';

@Component({
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.page.html',
  styleUrls: ['./liste-clients.page.scss'],
})
export class ListeClientsPage implements OnInit {
  matricule: string='';
  clients!: any;
  SearchText: any;

  constructor(
    private utilisateurService: UtilisateurService,
    private apiService : ApiserviceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.matricule= this.utilisateurService.getMatricule();
    this.apiService.getListeofClients(this.matricule).subscribe((res)=>{
      console.log(res, 'la liste des clients');
      this.clients=res;
    });

  }
  gotoProspect(){
    this.router.navigate(['/nouveau-client'])
  }
  gotoDetail(us: any){
    console.log(" je m'en vais a la page detail")
    this.router.navigate(["/detail-clients", us.codeDemande])

  }

}
