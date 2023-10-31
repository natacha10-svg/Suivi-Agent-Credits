import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavParams } from '@ionic/angular';

import { AdminLocaliserClientPageRoutingModule } from './admin-localiser-client-routing.module';

import { AdminLocaliserClientPage } from './admin-localiser-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminLocaliserClientPageRoutingModule
  ],
  declarations: [AdminLocaliserClientPage],
  providers:[
    NavParams
  ]
})
export class AdminLocaliserClientPageModule {}
