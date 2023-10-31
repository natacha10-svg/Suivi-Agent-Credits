import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavParams } from '@ionic/angular';

import { LocaliserClientPageRoutingModule } from './localiser-client-routing.module';

import { LocaliserClientPage } from './localiser-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocaliserClientPageRoutingModule
  ],
  declarations: [LocaliserClientPage],
  providers:[
    NavParams
  ]
})
export class LocaliserClientPageModule {}
