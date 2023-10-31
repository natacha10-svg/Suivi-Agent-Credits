import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/service/apiservice.service';
import { AuthService } from 'src/app/service/auth.service';



@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.page.html',
  styleUrls: ['./dashboard-admin.page.scss'],
})
export class DashboardAdminPage implements OnInit {

  impayes !: any ;
  montant !: any;
  client!: any;
  agent!: any;
  SearchText: any="";

  constructor(
    private service: ApiserviceService,
    private authservice: AuthService,
    private router: Router
  ) {
   }
  ngOnInit() {
    this.service.listeImpayes().subscribe((res)=>{
      this.impayes=res.data;
    });
    this.service.getStatistique().subscribe((res)=>{
      this.montant=res.montant_total;
      this.client=res.total_clients;
      this.agent=res.total_agents;
    });
  }
  detail(impaye : any ){
    this.router.navigate(['admin-detail-demande', impaye.codeDemande])
  }
  deconnexion(){
    this.authservice.deconnexion();
  }
  /*
  createChart(){

    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
								 '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ],
	       datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
								 '574', '573', '576'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }
        ]
      },
      options: {
        aspectRatio:2.5
      }

    });
  }
  */

}
