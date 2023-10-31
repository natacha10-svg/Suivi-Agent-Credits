import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavParams } from '@ionic/angular';

import { DetailClientsPageRoutingModule } from './detail-clients-routing.module';

import { DetailClientsPage } from './detail-clients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailClientsPageRoutingModule
  ],
  declarations: [DetailClientsPage],
  providers:[
    NavParams
  ]
})
export class DetailClientsPageModule {}
