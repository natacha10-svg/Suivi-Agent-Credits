import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/service/apiservice.service';
import { AuthService } from 'src/app/service/auth.service';
import { jsPDF} from 'jspdf';



@Component({
  selector: 'app-admin-liste-rapports',
  templateUrl: './admin-liste-rapports.page.html',
  styleUrls: ['./admin-liste-rapports.page.scss'],
})
export class AdminListeRapportsPage implements OnInit {
  SearchText: any="";
  rapports: any[]=[];
  message: string ="";

  constructor(
    private service: ApiserviceService,
    private authservice: AuthService,
  ) { }

  ngOnInit() {
    this
    .listeRapports();
  }
  listeRapports(){
    this.service.listeRapports().subscribe((res)=>{
      this.rapports=res.data;
      this.message=res.message;
      console.log(this.message);
    });
  }
  getRapport(codeRapport: any){
    console.log(codeRapport);
    this.service.downloadRapport(codeRapport).subscribe((res)=>{

    });
  }

  deconnexion(){
    this.authservice.deconnexion();
  }
  genererPDF() {
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',

    });

    const data = this.rapports ;

    // Ajoutez les données des rapports au tableau "data" au format souhaité
    let header = (['ID', 'Firstname', 'Lastname']);

    doc.table(1, 1, data, header, {});

    doc.save('rapports.pdf'); // Téléchargez le PDF avec un nom de fichier personnalisé
  }



}
