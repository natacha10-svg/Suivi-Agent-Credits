import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiserviceService } from 'src/app/service/apiservice.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin-modifier-client',
  templateUrl: './admin-modifier-client.page.html',
  styleUrls: ['./admin-modifier-client.page.scss'],
})
export class AdminModifierClientPage implements OnInit {
  codeProspect: any;
  data: any;
  Message: any;
  Error: any;
  ClientForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private activatedroute: ActivatedRoute,
    private service: ApiserviceService,
    private router: Router,
    private authservice : AuthService
  ) {
    this.ClientForm = this.formBuilder.group({
      nom: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      dateNaissanceClient: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required]),
      sexe: new FormControl('', [Validators.required]),
      numeroCNI: new FormControl('', [Validators.required]),
      profession: new FormControl('', [Validators.required]),
      residence: new FormControl('', [Validators.required]),

    });
  }

  ngOnInit() {
    this.codeProspect = this.activatedroute.snapshot.paramMap.get('id');
    console.log('le code du prospect  est', this.codeProspect);
    this.selection();
  }

  modifier() {
    if (this.ClientForm.valid) {

        const data = {
          codeProspect: this.codeProspect,
          nom: this.ClientForm.value.nom,
          prenom: this.ClientForm.value.prenom,
          dateNaissanceClient: this.ClientForm.value.dateNaissance,
          sexe: this.ClientForm.value.sexe,
          telephone: this.ClientForm.value.telephone,
          numeroCNI: this.ClientForm.value.numeroCNI,
          profession: this.ClientForm.value.profession,
          residence: this.ClientForm.value.residence,

        };
        this.service
          .updateProspect(data)
          .subscribe((res) => {
            console.log(' les information ont bien ete pris en compte');
            this.Message = res.message;
            this.router.navigate(['admin-liste-client']);
          });

    } else if (this.ClientForm.invalid) {
      console.log(" le formulaire n'est pas valide ");
      console.log(' les valeurs du formulaire sont', this.ClientForm.value);
      this.Error = 'les champs du formulaire sont invalide ';
    }
  }
  selection() {
    this.service.selectionProspect(Number(this.codeProspect)).subscribe((res) => {
      console.log("voici les information de l'agent", res);
      this.data = res.data;
      console.log(' voici les donnees ', this.data);

      this.ClientForm.patchValue({
        nom: res.data[0].nom,
        prenom: res.data[0].prenom,
        sexe: res.data[0].sexe,
        dateNaissanceClient: res.data[0].dateNaissanceClient,
        telephone: res.data[0].telephone,
        numeroCNI: res.data[0].numeroCNI,
        profession: res.data[0].profession,
        residence: res.data[0].residence
      });
    });
  }
  
  deconnexion(){
    this.authservice.deconnexion();
  }

}
