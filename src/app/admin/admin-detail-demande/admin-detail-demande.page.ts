import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { ApiserviceService } from 'src/app/service/apiservice.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin-detail-demande',
  templateUrl: './admin-detail-demande.page.html',
  styleUrls: ['./admin-detail-demande.page.scss'],
})
export class AdminDetailDemandePage implements OnInit {

  echeances!:any;
  codeDemande !: any;
  selectedAgent: any;
  showModal: boolean = false;
  agents: any[''];


  constructor(
    private activatedroute: ActivatedRoute,
    private service: ApiserviceService,
    private authservice: AuthService,
  ) {}

  ngOnInit() {
    this.codeDemande= this.activatedroute.snapshot.paramMap.get('id');
    console.log('Le code de la demande est', this.codeDemande);
    this.service.detailDemande(Number(this.codeDemande)).subscribe((res)=>{
      this.echeances=res.data;
    });
    this.listeAgents();
  }
  listeAgents() {
    this.service.listeAgents().subscribe((res) => {
      this.agents = res.data;
    });
  }

  ListeEcheances (codeDemande: any ){
    this.service.detailDemande(Number(codeDemande)).subscribe((data)=>{
      this.echeances=data;
    });

  }
  deconnexion(){
    this.authservice.deconnexion();
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
      const echeances = this.echeances;
      // Définissez la position initiale pour le texte
      let x = margin;
      let y = height - margin;

      const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

      page.drawText('DETAIL DEMANDE DE CREDIT', {x: x+110, y, size: 12, font: boldFont ,color: rgb(0, 0.53, 0.71), });
      y -= 20;
      page.drawText('Nom du client ', { x, y, size: 10, color: rgb(0, 0, 0) });


      // Ajoutez les en-têtes du tableau
      page.drawText('Code', { x, y, size: 10, color: rgb(0, 0, 0) });
      x += columnWidth;
      page.drawText('Montant', { x, y, size: 10, color: rgb(0, 0, 0) });
      x += columnWidth;
      page.drawText('Statut', { x, y, size: 10, color: rgb(0, 0, 0) });
      x += columnWidth;
      page.drawText('Date', { x, y, size: 10, color: rgb(0, 0, 0) });


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
      for (const echeance of echeances) {
        x = margin;
        y -= 20;

        page.drawText(echeance.codeDemande, { x, y, size: 8, color: rgb(0, 0, 0) });
        x += columnWidth;
        page.drawText(echeance.montantEcheance, { x, y, size:8 , color: rgb(0, 0, 0) });
        x += columnWidth;
        page.drawText(echeance.statut, { x, y, size: 8, color: rgb(0, 0, 0) });
        x += columnWidth;
        page.drawText(echeance.dateEcheance.toString(), { x, y, size: 8, color: rgb(0, 0, 0) });


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


  affecter() {
    console.log('le matricule est ', this.selectedAgent);
    this.service
      .affecter(this.selectedAgent, this.codeDemande)
      .subscribe((res) => {
        console.log('message', res);
      });
    this.closeModal();
  }
  openModal() {
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
  }



}
