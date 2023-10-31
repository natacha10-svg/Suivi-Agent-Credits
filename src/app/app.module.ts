import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './service/auth.service';
import { ApiserviceService } from './service/apiservice.service';
import { UtilisateurService } from './service/utilisateur.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(),
     AppRoutingModule,
     HttpClientModule,
     ReactiveFormsModule
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  AuthService,
  ApiserviceService,
  UtilisateurService
],
  bootstrap: [AppComponent],
})
export class AppModule {}
