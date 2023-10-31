import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/service/apiservice.service';
import jsPDF from 'jspdf';
 import * as fs from 'fs';

 import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';

import html2canvas from 'html2canvas';
import { AuthService } from 'src/app/service/auth.service';

//import * as  jsPDF from 'jspdf';

@Component({
  selector: 'app-admin-liste-agents',
  templateUrl: './admin-liste-agents.page.html',
  styleUrls: ['./admin-liste-agents.page.scss'],
})
export class AdminListeAgentsPage implements OnInit {

  @ViewChild('htmlData') htmlData !: ElementRef;

  agents!: any;
  Error: string ='';
  Message: any;
  agentsForm !: FormGroup;
  SearchText=""

  constructor(
    private formBuilder: FormBuilder,
    private router : Router,
    private apiservice: ApiserviceService,
    private authservice: AuthService
     ) {



    this.agentsForm= this.formBuilder.group ({
      matricule: new FormControl('', [Validators.required]),
      nomAgent: new FormControl('', [Validators.required] ),
      prenomAgent: new FormControl('',[Validators.required]),
      sexeAgent: new FormControl('', [Validators.required]),
      dateNaissance: new FormControl('', [Validators.required]),
      telephoneAgent: new FormControl('' ,[Validators.required]),
      Cni: new FormControl('' ,[Validators.required]),
      residenceAgent: new FormControl('', [Validators.required]),
      idPoste: new FormControl('',[Validators.required]),
      codeAgence: new FormControl('', [Validators.required]),
      email: new FormControl('', [ Validators.email ]),
      password: new FormControl('', [Validators.required ]),
      statutAgent: new FormControl('' ,[Validators.required]),

    });
  }


  ngOnInit() {
    this.getAllData();
  }

  get f(){
    return this.agentsForm.controls;
  }

  deconnexion(){
    this.authservice.deconnexion();
  }



  enregistrer(){
    if(this.agentsForm.invalid){

    }
     if(this.agentsForm.valid){
      const data={
          matricule: this.agentsForm.value.matricule,
          nomAgent : this.agentsForm.value.nomAgent,
          prenomAgent : this.agentsForm.value.prenomAgent,
          sexeAgent : this.agentsForm.value.sexeAgent,
          dateNaissance : this.agentsForm.value.dateNaissance,
          telephoneAgent : this.agentsForm.value.telephoneAgent,
          Cni: this.agentsForm.value.Cni,
          residenceAgent : this.agentsForm.value.residenceAgent,
          idPoste : this.agentsForm.value.idPoste,
          codeAgence : this.agentsForm.value.codeAgence,
          email : this.agentsForm.value.email ,
          password: this.agentsForm.value.password,
          statutAgent: this.agentsForm.value.statutAgent
        };
        this.apiservice.ajoutAgents(data).subscribe((res)=>{

          this.Message = res.message;
          this.agentsForm.reset();
          this.getAllData();
        },
        (error)=>{
          console.log(" une erreur est survenue lors de l'enregistrement de l'agent")
        });

    }
  }

  liste( matricule: any){
    this.router.navigate(["/admin-performance-agent",matricule]);

  }
  modifier( matricule: any ){
    this.router.navigate(["/admin-modifier-agent",matricule]);
  }

  getAllData(){
    this.apiservice.listeAgents().subscribe((res)=>{
      this.agents=res.data;
      console.log(" J'afffiche la liste des agents de credits ");
    });

  }
  tri(){
    this.apiservice.triListeAgents().subscribe((res)=>{
      this.agents=res.data;
      console.log('tri a ete effectuee');
    })
  }

  showOptions(agent : any ){

  }
  /*

  openPDF(){
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 180;
      //let fileHeight= 297;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 5;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('liste des agents de credits.pdf');
    });

  }
  */

 /*

  openPDF(){
    const doc = new jsPDF();

    // Générez le tableau PDF à partir du tableau HTML
    doc.autoTable({ html: '#htmlData' });

    // Enregistrez le PDF ou ouvrez-le dans un nouvel onglet
    doc.save('liste_agents.pdf');

  }
  */
 /*
 exportPDF(){
  this.apiservice.downloadAgents().subscribe((data: Blob)=>{
    const blob = new Blob([data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);

        // Créez un lien pour télécharger le PDF
        const a = document.createElement('a');
        a.href = url;
        a.download = 'agents.pdf';
        document.body.appendChild(a);
        a.click();

        // Nettoyez l'URL de l'objet blob après le téléchargement
        window.URL.revokeObjectURL(url);

  });

 }
 */

/*

 exportPDF() {
  const PDFDocument = require('pdfkit');
  const doc = new PDFDocument();

  // Créez un flux de sortie vers le fichier PDF
  const stream = fs.createWriteStream('agents.pdf'); // Remplacez par le chemin approprié

  doc.pipe(stream);

  // Titre du PDF
  doc.fontSize(16).text('Liste des Agents de Crédits', { align: 'center' });
  doc.moveDown(0.5);

  // Tableau des agents
  const table = {
    headers: ['Nom', 'Prénom', 'Téléphone', 'Email'],
    rows: this.agents.map((agent: any ) => [agent.nomAgent, agent.prenomAgent, agent.telephoneAgent, agent.email]),
  };
  doc.table(table, {
    prepareHeader: () => doc.font('Helvetica-Bold'),
    prepareRow: (row : any, i: any) => doc.font('Helvetica').fontSize(12),
  });

  // Finalisez le document
  doc.end();

  // Informez l'utilisateur que le PDF a été généré avec succès
  alert('Le PDF a été généré avec succès.');
}
*/


async exportPDF(){

  try {
    // Créez un nouveau document PDF
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 400]);
    const { width, height } = page.getSize();

    // Définissez les marges et la largeur des colonnes
    const margin = 50;
    const tableWidth = width - 2 * margin;
    const columnWidth = tableWidth / 5;

    // Définissez les données de la liste des agents de crédits
    const agents = this.agents;
    // Définissez la position initiale pour le texte
    let x = margin;
    let y = height - margin;

    page.drawText('LISTE DE TOUS LES AGENTS DE CREDITS DE CECIC SA', {x: x+50, y, size: 12,color: rgb(0, 0.53, 0.71), });

    y -= 20;


    // Ajoutez les en-têtes du tableau
    page.drawText('Matricule', { x, y, size: 12, color: rgb(0, 0, 0) });
    x += columnWidth;
    page.drawText('Nom', { x, y, size: 12, color: rgb(0, 0, 0) });
    x += columnWidth;
    page.drawText('Prenom', { x, y, size: 12, color: rgb(0, 0, 0) });
    x += columnWidth;
    page.drawText('Telephone', { x, y, size: 12, color: rgb(0, 0, 0) });
    x += columnWidth;
    page.drawText('Agence', { x, y, size: 12, color: rgb(0, 0, 0) });


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
    for (const agent of agents) {
      x = margin;
      y -= 20;

      page.drawText(agent.matricule, { x, y, size: 9, color: rgb(0, 0, 0) });
      x += columnWidth;
      page.drawText(agent.nomAgent, { x, y, size:9 , color: rgb(0, 0, 0) });
      x += columnWidth;
      page.drawText(agent.prenomAgent, { x, y, size: 9, color: rgb(0, 0, 0) });
      x += columnWidth;
      page.drawText(agent.telephoneAgent.toString(), { x, y, size: 9, color: rgb(0, 0, 0) });
      x += columnWidth;
      page.drawText(agent.nomAgence, { x, y, size: 9, color: rgb(0, 0, 0) });

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
       link.download = 'agents_de_credits.pdf';
       link.click();

       // Libérez l'URL blob après le téléchargement
       URL.revokeObjectURL(blobURL);
     } catch (error) {
       console.error('Erreur lors de la génération du PDF :', error);
     }





}

}
