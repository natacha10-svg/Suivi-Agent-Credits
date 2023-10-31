import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiserviceService } from '../service/apiservice.service';
import { AuthService } from '../service/auth.service';
import * as bcrypt from 'bcryptjs';
import { UtilisateurService } from '../service/utilisateur.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  authStatus!: any;
  loginForm!: FormGroup;
  readData: any;
  loginError: any;
  Data: any[''] | undefined;
  tentatives: number = 0;


  private _isAuth = new BehaviorSubject<boolean>(false);
  isAuth=this._isAuth.asObservable();
  private isAdmin : string ="";


  constructor(
    private formBuilder: FormBuilder,
    private service: ApiserviceService,
    private authService: AuthService,
    private utilisateur: UtilisateurService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authStatus=this.authService.isAuthenticated();

    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.maxLength(8),
      ]),
      remenberMe: [false],
    });
    this.service.getAllData().subscribe((res) => {
      console.log(res, 'res===>');
      this.readData = res.data;
    });

    /*   const email=localStorage.getItem('email');
    const password=localStorage.getItem('password');

    if (email && password){
      this.remenberMe=true;
      this.loginForm.value.email=email;
      this.loginForm.value.password= password;
    }
    */
  }
  /*
  onSubmit(){
    const email=this.loginForm.value.email;
    const password=this.loginForm.value.password;

    const remenberMe=this.loginForm.value.remenberMe;

    if(this.loginForm.invalid){

    }
    this.service.connexion(email, password).subscribe(
      (response)=>{
      this.Data=response;
      this.loginError=response.message;
      console.log(response);
      this.utilisateur.setUtilisateur(this.Data);
      this.isAdmin=this.utilisateur.getidPoste();
      this._isAuth.next(true);
      if(this.isAdmin == "00B"){
        console.log("Redirection vers l'espace des superviseurs de credit");
        this.router.navigate(["/dashboard-admin"]);
      } if (this.isAdmin === "00A"){
        this.router.navigate(["/dashboard-user"]);
      }

    },
    (error)=> {
    this.loginError="Identifiants de connexions invalides";
    }
);

  }
  */


  onSubmit() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password

    const remenberMe = this.loginForm.value.remenberMe;
    if(this.loginForm.invalid){

    }
    console.log(password);
    this.authService.connexion(email, password).subscribe(
        (response) => {
          if (!remenberMe) {
            localStorage.setItem('username', this.loginForm.value.username);
            localStorage.setItem('password', this.loginForm.value.password);
          }
          this.loginError=response.message;
          this.loginForm.reset();
          this.loginError="";
        },
        (error) => {
          this.loginError = 'Email ou mot de passe incorrect';
          console.log("voici le message de connexion qui est affiche", this.loginError);
          this.tentatives ++;


          if(this.tentatives >= 5 ){
            this.loginForm.disable();
            this.loginForm.reset();
            document.getElementById('submitBtn')?.setAttribute('disabled','disabled')

            setTimeout(()=>{
              this.loginForm.enable();
              document.getElementById('submitBtn')?.removeAttribute('disabled');
              this.tentatives=0;
              this.loginError="";
            }, 120000 );

          }
        }
      );

  }



  onRememberMeChange(): void {
    if (this.loginForm.value.remenberMe) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('email');
      localStorage.removeItem('password');
    }
  }


}
