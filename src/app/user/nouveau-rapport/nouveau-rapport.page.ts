import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from 'src/app/service/apiservice.service';
import { UtilisateurService } from 'src/app/service/utilisateur.service';

@Component({
  selector: 'app-nouveau-rapport',
  templateUrl: './nouveau-rapport.page.html',
  styleUrls: ['./nouveau-rapport.page.scss'],
})
export class NouveauRapportPage implements OnInit {
  nomFichier: string ="aucunNom";
  contenuFichier : string ="aucun contenu";
  name: string="";
  file: any;
  form !: FormGroup;
  matricule : string=""
  constructor(
    private fb: FormBuilder,
    private utilisateur: UtilisateurService,
    private service: ApiserviceService,
    private router: Router
    ){
    this.form = this.fb.group({
      libelle: [''],
      objet: [''],
      dateRapport:[''],
      matricule:[''],
      fichier:[null]
    })

  }
  ngOnInit() {
    this.matricule= this.utilisateur.getMatricule();
  }
  retour(){
    this.router.navigate(["/dashboard-user/dashboard-user/liste-rapports"]);
  }

  getFile(event: any){
    let file = event.target.files[0];
    this.form.patchValue({
      fichier: file
    });
    this.form.get('fichier')?.updateValueAndValidity();

  }
  submitForm(){
    var formData : any = new FormData();
    formData.append('libelle', this.form.value.libelle);
    formData.append('objet', this.form.value.objet);
    formData.append('dateRapport', this.form.value.dateRapport);
    formData.append('matricule', this.matricule);
    formData.append('file', this.form.value.fichier);

    this.service.uploadRapport(formData).subscribe((response: any)=>{
      console.log(" l'envoi du rapport  a ete un success");
      this.form.reset();
      this.service.rapportAjoute();
      this.router.navigate(['/dashboard-user/dashboard-user/liste-rapports'])
    },
    (error)=>{
      console.error ("Erreur lors de l'enregistrement du rapport de prospection");
    });

  }
}
