import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/service/apiservice.service';

@Component({
  selector: 'app-detail-clients',
  templateUrl: './detail-clients.page.html',
  styleUrls: ['./detail-clients.page.scss'],
})
export class DetailClientsPage implements OnInit {

  detailClient!: any;
  id!: any ;
  nomClient!: any;
  telephone: string ='';
  codeDemande !: any;
  codeProspect!: any;

  constructor(
    private route: Router,
    private activatedroute: ActivatedRoute,
    private apiService: ApiserviceService
  ) { }

  ngOnInit() {
    this.codeDemande = this.activatedroute.snapshot.paramMap.get('id');

    this.apiService.getdetailClients(Number(this.codeDemande) ).subscribe((res)=>{
      console.log(res, "les detail des echeances sur le clients");
      this.detailClient=res;
      this.codeProspect=res[0].codeProspect;


    });
    this.apiService.getNumero(this.codeProspect).subscribe((res)=>{
      this.telephone=res.data;
      console.log(" le telephone de l'agent", this.telephone);

    });


  }
localiser(){
  this.route.navigate(['localiser-client', this.codeProspect]);
}

  modifierStatut(codeEcheance: number){
    this.apiService.validation(codeEcheance).subscribe((res)=>{
      console.log(" modification de l'echeance en cours.....");
    });

  }
  appeller(){
    window.open(`tel: ${this.telephone}`, '_system')
  }

  retour(){
    this.route.navigate(['/dashboard-user/dashboard-user/liste-clients']);
  }


}
