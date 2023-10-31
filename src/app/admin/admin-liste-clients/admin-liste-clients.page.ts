import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { ApiserviceService } from 'src/app/service/apiservice.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin-liste-clients',
  templateUrl: './admin-liste-clients.page.html',
  styleUrls: ['./admin-liste-clients.page.scss'],
})
export class AdminListeClientsPage implements OnInit {
  clients: any[''];
  SearchText=""

  constructor(
    private service: ApiserviceService,
    private router: Router,
    private authservice : AuthService,
  ) { }

  ngOnInit() {
    this.listeProspect();
  }
  listeProspect(){
    this.service.listeProspects().subscribe((res)=>{
      this.clients=res.data;
    })
  }
  modifier(codeProspect: number ){
    this.router.navigate(['/admin-modifier-client', codeProspect]);

  }
  localiser(codeProspect : number){
    this.router.navigate(['/admin-localiser-client', codeProspect]);
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
    const columnWidth = tableWidth / 7;

    // Définissez les données de la liste des agents de crédits
    const clients = this.clients;
    // Définissez la position initiale pour le texte
    let x = margin;
    let y = height - margin;

    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    page.drawText('LISTE DE TOUS LES CLIENTS DE CECIC SA', {x: x+110, y, size: 12, font: boldFont ,color: rgb(0, 0.53, 0.71), });

    y -= 20;


    // Ajoutez les en-têtes du tableau
    page.drawText('CodeProspect', { x, y, size: 10, color: rgb(0, 0, 0) });
    x += columnWidth;
    page.drawText('Nom', { x, y, size: 10, color: rgb(0, 0, 0) });
    x += columnWidth;
    page.drawText('Prenom', { x, y, size: 10, color: rgb(0, 0, 0) });
    x += columnWidth;
    page.drawText('Numero de CNI', { x, y, size: 10, color: rgb(0, 0, 0) });
    x += columnWidth;
    page.drawText('Telephone', { x, y, size: 10, color: rgb(0, 0, 0) });
    x += columnWidth;
    page.drawText('Profession', { x, y, size: 10, color: rgb(0, 0, 0) });
    x += columnWidth;
    page.drawText('Residence', { x, y, size: 10, color: rgb(0, 0, 0) });


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
    for (const client of clients) {
      x = margin;
      y -= 20;

      page.drawText(client.codeProspect.toString(), { x, y, size: 8, color: rgb(0, 0, 0) });
      x += columnWidth;
      page.drawText(client.nom, { x, y, size:8 , color: rgb(0, 0, 0) });
      x += columnWidth;
      page.drawText(client.prenom, { x, y, size: 8, color: rgb(0, 0, 0) });
      x += columnWidth;
      page.drawText(client.numeroCNI.toString(), { x, y, size: 8, color: rgb(0, 0, 0) });
      x += columnWidth;
      page.drawText(client.telephone.toString(), { x, y, size: 8, color: rgb(0, 0, 0) });
      x += columnWidth;
      page.drawText(client.profession, { x, y, size: 8, color: rgb(0, 0, 0) });
      x += columnWidth;
      page.drawText(client.residence, { x, y, size: 8, color: rgb(0, 0, 0) });
      x += columnWidth;

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
       link.download = 'Liste_de_clients.pdf';
       link.click();

       // Libérez l'URL blob après le téléchargement
       URL.revokeObjectURL(blobURL);
     } catch (error) {
       console.error('Erreur lors de la génération du PDF :', error);
     }





}

}
