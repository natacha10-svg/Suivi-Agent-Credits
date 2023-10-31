import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/service/apiservice.service';
import {Chart} from 'chart.js/auto'
import { AuthService } from 'src/app/service/auth.service';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

@Component({
  selector: 'app-admin-liste-demande-credit',
  templateUrl: './admin-liste-demande-credit.page.html',
  styleUrls: ['./admin-liste-demande-credit.page.scss'],
})
export class AdminListeDemandeCreditPage implements OnInit {

  public chart: any;
  months: string[] = [''];
  counts: number[] = [];

  demandes: any[''];

  showModal: boolean = false;
  agents: any[''];
  selectedAgent: any;
  SearchText: any="";

  message: string = '';
  codeDemande: number = 0;

  constructor(
    private service: ApiserviceService,
    private router: Router,
    private authservice: AuthService,
    ) {}

  ngOnInit() {
    this.listeDemande();
    this.listeAgents();

    this.service.credits().subscribe(data=>{
      console.log(data);
      this.months =data.months;

      this.counts = data.counts;

    this.chart=new Chart('MyChart',{
      type:'bar',
      data:{
        labels:this.months,
        datasets:[{
          label: 'Nombre de demande de credit',
          data: this.counts,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options:{
        aspectRatio: 2.5,
        scales: {
          y:{
            beginAtZero:true,
          },
        },
      },
    });


  });

  }
  listeDemande() {
    this.service.listeDemande().subscribe((res) => {
      this.demandes = res.data;
      this.message = res.message;
      console.log(this.message);
    });
  }
  deconnexion(){
    this.authservice.deconnexion();
  }

  affecter() {
    console.log('le matricule est ', this.selectedAgent);
    this.service
      .affecter(this.selectedAgent, this.codeDemande)
      .subscribe((res) => {
        console.log('message', res);
      });
    this.closeModal();
    this.listeDemande();
  }
  openModal(codeDemande: any) {
    this.showModal = true;
    this.codeDemande = codeDemande;
  }
  closeModal() {
    this.showModal = false;
  }
  listeAgents() {
    this.service.listeAgents().subscribe((res) => {
      this.agents = res.data;
    });
  }
  goToDetail(codeDemande: number) {
    this.router.navigate(['/admin-detail-demande', codeDemande]);
  }
  /*

  getColor(etat: string): string {
    switch (etat) {
      case 'acceptee':
        return 'var(--blue)';
      case 'refusee':
        return 'red';
      case 'en cours':
        return 'orange';
      default:
        return 'black'; // Couleur par défaut si l'état ne correspond à aucun cas
    }
  }
  */
 relance(){
  this.service.triRelanceDemande().subscribe((res)=>{
    console.log(" la selction des demande en fonction des priorite de realnce");
    this.demandes=res.data;
    console.log(" les demandes en fonction des relances ");
  });
 }

 async exportPDF(){

  try {
    // Créez un nouveau document PDF
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);
    const { width, height } = page.getSize();

    // Définissez les marges et la largeur des colonnes
    const margin = 50;
    const tableWidth = width - 2 * margin;
    const columnWidth = tableWidth / 6;

    // Définissez les données de la liste des agents de crédits
    const demandes = this.demandes;
    // Définissez la position initiale pour le texte
    let x = margin;
    let y = height - margin;

    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    page.drawText('LISTE DE TOUTES LES DEMANDES DE CECIC SA', {x: x+110, y, size: 12, font: boldFont ,color: rgb(0, 0.53, 0.71), });

    y -= 20;


    // Ajoutez les en-têtes du tableau
    page.drawText('Code', { x, y, size: 10, color: rgb(0, 0, 0) });
    x += columnWidth;
    page.drawText('Libelle', { x, y, size: 10, color: rgb(0, 0, 0) });
    x += columnWidth;
    page.drawText('Montant', { x, y, size: 10, color: rgb(0, 0, 0) });
    x += columnWidth;
    page.drawText('Duree', { x, y, size: 10, color: rgb(0, 0, 0) });
    x += columnWidth;
    page.drawText('Etat', { x, y, size: 10, color: rgb(0, 0, 0) });
    x += columnWidth;
    page.drawText('Agent de credit', { x, y, size: 10, color: rgb(0, 0, 0) });


    // Déplacez-vous vers la prochaine ligne
    y -= 20;

    page.drawLine({
      start: { x: margin, y },
      end: { x: width - margin, y },
      thickness: 1,
      color: rgb(0, 0, 0),
    });


    y -= 5;

    // Parcourez les données des agents et ajoutez-les au PDF
    for (const demande of demandes) {
      x = margin;
      y -= 20;

      page.drawText(demande.codeDemande.toString(), { x, y, size: 8, color: rgb(0, 0, 0) });
      x += columnWidth;
      page.drawText(demande.libelleDemande, { x, y, size:8 , color: rgb(0, 0, 0) });
      x += columnWidth;
      page.drawText(demande.montant.toString(), { x, y, size: 8, color: rgb(0, 0, 0) });
      x += columnWidth;
      page.drawText(demande.duree.toString(), { x, y, size: 8, color: rgb(0, 0, 0) });
      x += columnWidth;
      page.drawText(demande.etat, { x, y, size: 8, color: rgb(0, 0, 0) });
      x += columnWidth;
      page.drawText(demande.nomAgent, { x, y, size: 8, color: rgb(0, 0, 0) });

    }

       // Encodez le document PDF en ArrayBuffer
       const pdfBytes = await pdfDoc.save();

       // Créez un blob à partir du ArrayBuffer
       const blob = new Blob([pdfBytes], { type: 'application/pdf' });

       // Générez un URL blob pour le téléchargement
       const blobURL = URL.createObjectURL(blob);

       // Créez un lien de téléchargement et cliquez dessus
       const link = document.createElement('a');
       link.href = blobURL;
       link.download = 'Liste_de_demande_credits.pdf';
       link.click();

       // Libérez l'URL blob après le téléchargement
       URL.revokeObjectURL(blobURL);
     } catch (error) {
       console.error('Erreur lors de la génération du PDF :', error);
     }





}

}
