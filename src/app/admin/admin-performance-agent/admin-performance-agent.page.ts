import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiserviceService } from 'src/app/service/apiservice.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin-performance-agent',
  templateUrl: './admin-performance-agent.page.html',
  styleUrls: ['./admin-performance-agent.page.scss'],
})
export class AdminPerformanceAgentPage implements OnInit {
  SearchText: any="";
  demandes !: any;
  matricule !: any;


  constructor(
    private activatedroute: ActivatedRoute,
    private service: ApiserviceService,
    private authservice : AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.matricule= this.activatedroute.snapshot.paramMap.get('id');
    console.log('le code de la demande est', this.matricule);

    this.service.performanceAgent(this.matricule).subscribe((res)=>{
      console.log("la liste de toutes les demandes de cet agent ");
      this.demandes=res;
    });
  }

  detail(demande: any){
  }
  deconnexion(){
    this.authservice.deconnexion();
  }
  listeEcheance( codeDemande: any ){
    this.router.navigate(['/admin-detail-demande', codeDemande]);

  }

}
