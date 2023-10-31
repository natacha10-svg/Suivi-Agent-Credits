import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'
import {  BehaviorSubject, Observable } from 'rxjs';
import { AnyAaaaRecord } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  constructor(private _http: HttpClient ) { }

  // CONNECT FRONT END ET BACKEND
  apiUrl= 'http://localhost:3000/';

  private rapportAjouteSubject = new BehaviorSubject<boolean>(false);

  rapportAjoute$ = this.rapportAjouteSubject.asObservable();

  rapportAjoute() {
    this.rapportAjouteSubject.next(true);
  }



  //get all dat,a
  getAllData(): Observable<any>{
    return this._http.get(`${this.apiUrl}user/tout`);
  }

  getListeofClients(matricule: string ):Observable<any>{
    let matricules=matricule;
    return this._http.get(`${this.apiUrl}user/clients/${matricules}`);
  }

  getdetailClients(codeDemande: any ):Observable<any>{
    return this._http.get(`${this.apiUrl}user/clients/detail/${codeDemande}`);
  }

  getNumero(codeProspect: any): Observable<any>{
    return this._http.get(`${this.apiUrl}user/clients/telephone/${codeProspect}`);
  }

  connexion(email:string, password:string): Observable<any>{
    return this._http.post(`${this.apiUrl}user/connexion`,{email,password});
    /*
    .pipe(
      map((response)=>{
          sessionStorage.setItem('currentUser', JSON.stringify(response));
          console.log("un fichier json a ete trouve");
        return response;
      }),
      catchError(error=>{
        console.log("Error", error);
        return throwError(error);
      })
    );*/
  }

  getEchancesSemaine(matricules : string): Observable<any> {
    let matricule= matricules;
    return this._http.post(`${this.apiUrl}user/accueil`, {matricule});
  }

  getImpayes(matricule$: string): Observable<any> {
    let matricule= matricule$;
    return this._http.post(`${this.apiUrl}user/impayes`, {matricule});
  }

  validation(codeEcheance: number): Observable<any> {
    return this._http.put(`${this.apiUrl}user/validation`, {codeEcheance});
  }

  enrolProspect(data: any): Observable<any>{
    return this._http.post(`${this.apiUrl}user/clients/ajout`, data);
  }

  enrolDemande(data: any): Observable<any>{
    return this._http.post(`${this.apiUrl}user/demande`, data)
  }

  enrolProspect_demande(data:any, matricule: string): Observable<any>{
    return this._http.post(`${this.apiUrl}user/clients-demande`, {data, matricule})
  }

  uploadRapport(data: any):Observable<any>{
    return this._http.post(`${this.apiUrl}user/upload`,data );
  }

  listeRapport(matricules: string): Observable<any>{
    let matricule=matricules;
    return this._http.post(`${this.apiUrl}user/rapport`, {matricule});
  }

  visualiserRapport( codeRapport: any ): Observable<any>{
    return this._http.get(`${this.apiUrl}user/rapport/${codeRapport}`);
  }

  consulterImpaye(): Observable<any>{
    return this._http.get(`${this.apiUrl}admin/impayes`);
  }


  credits():Observable<any>{
    return  this._http.get(`${this.apiUrl}admin/credits`);

  }




  /// C'est pour les  administrateurs

  // ceci permet de'afficher la liste des agents de credits
  listeAgents(): Observable<any>{
    return this._http.get(`${this.apiUrl}admin/liste-agents`);
  }

  triListeAgents(): Observable<any>{
    return this._http.get(`${this.apiUrl}admin/tri-liste-agents`);
  }

  listeClientsAgents(matricule : string): Observable<any>{
    return this._http.post(`${this.apiUrl}admin/tri-liste-agents`, {matricule});
  }

  downloadAgents():Observable<any>{
    return this._http.get(`${this.apiUrl}admin/download/liste-agents`);

  }



// ceci c'est pour ajouter un agents de credit dans la base de donner
  ajoutAgents(data: any ):Observable<any>{
    return this._http.post(`${this.apiUrl}admin/ajouter`, data);
  }

  // ceci permet de collecter les information concernant un agent de credit en particulier
  selectionnerAgent(matricule: any): Observable<any>{
    return this._http.get(`${this.apiUrl}admin/agent/${matricule}`);
  }


// Ceci va permettre de supprimer les information d'un agent de credit dans la base de donnees
  deleteAgent( matricules: string): Observable<any>{
    let matricule=matricules;
    return this._http.delete(`${this.apiUrl}admin/agent/${matricule}`);

  }


// ceci est pour permettre de modifier les information d'una gent de credit dans la base de donnees
  updateAgent ( data : any ): Observable <any>{
    console.log(" je suis deja dans l'api pour modifier");
    return this._http.put(`${this.apiUrl}admin/agent/modifier`, data);
  }


  // l'appel de cete fonction permetrra de d'efficher la liste des prospect s
  listeRapports(): Observable<any>{
    return this._http.get(`${this.apiUrl}admin/rapport`);

  }
  downloadRapport(codeRapport: any): Observable<any>{
    console.log("le code du rapport est ", codeRapport);
    return this._http.get(`${this.apiUrl}user/rapport/${codeRapport}`);
  }

// aAfficher la liste des prospects
  listeProspects(): Observable<any>{
    return this._http.get(`${this.apiUrl}admin/prospects`);
  }

// afficher les information d'un prospect en particulier
  selectionProspect(codeProspect: number): Observable<any>{
  return this._http.get(`${this.apiUrl}admin/prospect/${codeProspect}`);
  }

  // modifier les informations d'un prospect
  updateProspect( data: any): Observable<any>{
    return this._http.post(`${this.apiUrl}admin/prospect/modifier`, data);

  }

  deleteProspect(codeProspect: any): Observable<any>{
    return this._http.delete(`${ this.apiUrl}admin/prospect/:${codeProspect}`);
  }

  listeDemande():Observable<any>{
    return this._http.get(`${this.apiUrl}admin/liste-demande`);
  }


  trilisteDemande():Observable<any>{
    return this._http.get(`${this.apiUrl}admin/tri-liste-demande`);
  }

  triRelanceDemande(): Observable<any>{
    return this._http.get(`${this.apiUrl}admin/relance-liste-demande`);

  }

  affecter(matricule: string, codeDemande: number): Observable<any>{
    return this._http.put(`${this.apiUrl}admin/demande/affectation`, {matricule, codeDemande} );
  }


  performanceAgent(matricules: string): Observable<any>{
    let matricule=matricules;
    return this._http.post(`${this.apiUrl}admin/agents/performance`,{matricule});
  }

  obtenirMontant(matricule:string): Observable<any>{
    return this._http.get(`${this.apiUrl}admin/obtenir/montant/${matricule}`,);
  }

  detailDemande(codeDemande: number): Observable<any> {
    return this._http.get(`${this.apiUrl}admin/details/demande/${codeDemande}`);
  }

  localisationProspect(codeProspect: number):Observable<any>{
    return this._http.post(`${this.apiUrl}user/localisation`, {codeProspect});
  }

  listeImpayes(): Observable<any>{
    return this._http.get(`${this.apiUrl}admin/impayes`);
  }
  getStatistique(): Observable<any>{
    return this._http.get(`${this.apiUrl}admin/dashboard`);
  }




}
