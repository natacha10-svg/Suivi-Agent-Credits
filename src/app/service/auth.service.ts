import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from './apiservice.service';
import { UtilisateurService } from './utilisateur.service';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   private _isAuth = new BehaviorSubject<boolean>(false);
   public isAuth = this._isAuth.asObservable()

  private isAdmin : string ="";
  Data: any[''];

  constructor(
    private router: Router,
    private service: ApiserviceService,
    private utilisateur: UtilisateurService
    ) {}


  connexion(email: string, password: string): Observable<any>{
    return this.service.connexion(email, password).pipe(
      tap((response: any) => {
        this.Data=response;
        console.log(response);
        this.utilisateur.setUtilisateur(this.Data);
        localStorage.setItem('access_token', response.token);
        this.isAdmin=this.utilisateur.getidPoste();
        if(this.isAdmin === "00B"){
          console.log('je me redige vers le cote admin')
          this.router.navigate(["/dashboard-admin"]);
        } if (this.isAdmin === "00A" ){
          this.router.navigate(["dashboard-user"]);
        }
        this._isAuth.next(true);
      })
    );
  }

  isAuthenticated(): Observable<boolean> {
    return this._isAuth.asObservable();
  }



  deconnexion(): void {
    localStorage.removeItem('access_token');
    this._isAuth.next(false);
    console.log (this._isAuth);
    this.router.navigate(['/home']);
  }


}
