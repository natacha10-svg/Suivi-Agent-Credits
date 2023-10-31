import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavParams } from '@ionic/angular';

import { AdminDetailDemandePageRoutingModule } from './admin-detail-demande-routing.module';

import { AdminDetailDemandePage } from './admin-detail-demande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminDetailDemandePageRoutingModule
  ],
  declarations: [AdminDetailDemandePage],
  providers:[
    NavParams
  ]
})
export class AdminDetailDemandePageModule {}
