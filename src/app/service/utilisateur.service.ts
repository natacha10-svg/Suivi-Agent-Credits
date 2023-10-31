import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  utilisateur: any;

  constructor() { }

  setUtilisateur( utilisateur: any){
    this.utilisateur=utilisateur.data;
    console.log(this.utilisateur)

  }
  getUtilisateur(){
    return this.utilisateur;
  }

  getMatricule(): string{
    if(this.utilisateur){
      return this.utilisateur.matricule as string;
    }else{
      console.log('on n a pas trouve le matricule de l agent de credit ' );
      return '';
    }
  }

  getidPoste(): string{
    if(this.utilisateur){
      console.log( this.utilisateur.idPoste)
      return this.utilisateur.idPoste as string ;
    }
    else{
      console.log('on n a pas trouve l identifint du poste ');
      return '';
    }
  }
}
