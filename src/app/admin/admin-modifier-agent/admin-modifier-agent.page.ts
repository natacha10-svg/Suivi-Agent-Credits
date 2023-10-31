import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from 'src/app/service/apiservice.service';
import * as bcrypt from 'bcryptjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin-modifier-agent',
  templateUrl: './admin-modifier-agent.page.html',
  styleUrls: ['./admin-modifier-agent.page.scss'],
})
export class AdminModifierAgentPage implements OnInit {
  matricule: any;
  data: any;
  Message: any;
  Error: any;
  AgentForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private activatedroute: ActivatedRoute,
    private service: ApiserviceService,
    private authservice : AuthService
  ) {
    this.AgentForm = this.formBuilder.group({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      sexe: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required]),
      residence: new FormControl('', [Validators.required]),
      poste: new FormControl('', [Validators.required]),
      agence: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.matricule = this.activatedroute.snapshot.paramMap.get('id');
    console.log(' le matricule est', this.matricule);
    this.selection();
  }

  modifier() {
    if (this.AgentForm.valid) {
      bcrypt.hash(this.AgentForm.value.password, 10).then((hashedPassword) => {
        const data = {
          matricule: this.matricule,
          nomAgent: this.AgentForm.value.nom,
          prenomAgent: this.AgentForm.value.prenom,
          sexeAgent: this.AgentForm.value.sexe,
          dateNaissance: this.AgentForm.value.dateNaissance,
          telephoneAgent: this.AgentForm.value.telephone,
          residenceAgent: this.AgentForm.value.residence,
          idPoste: this.AgentForm.value.poste,
          codeAgence: this.AgentForm.value.agence,
          email: this.AgentForm.value.email,
          password: hashedPassword,
        };
        this.service.updateAgent(data).subscribe((res) => {
          console.log(' les information ont bien ete pris en compte');
          this.Message = res.message;
          });
      });
    } else if (this.AgentForm.invalid) {
      console.log(" le formulaire n'est pas valide ");
      console.log(' les valeurs du formulaire sont', this.AgentForm.value);
      this.Error = 'les champs du formulaire sont invalide ';
    }
  }
  selection() {
    this.service.selectionnerAgent(this.matricule).subscribe((res) => {
      console.log("voici les information de l'agent", res);
      this.data = res.data;
      console.log(' voici les donnees ', this.data);

      this.AgentForm.patchValue({
        nom: res.data[0].nomAgent,
        prenom: res.data[0].prenomAgent,
        sexe: res.data[0].sexeAgent,
        dateNaissance: res.data[0].dateNaissance,
        telephone: res.data[0].telephoneAgent,
        residence: res.data[0].residenceAgent,
        poste: res.data[0].idPoste,
        agence: res.data[0].codeAgence,
        email: res.data[0].email,
        password: res.data[0].password,
      });
    });
  }
  
  deconnexion(){
    this.authservice.deconnexion();
  }
}
