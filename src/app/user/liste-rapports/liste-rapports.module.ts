import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeRapportsPageRoutingModule } from './liste-rapports-routing.module';

import { ListeRapportsPage } from './liste-rapports.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeRapportsPageRoutingModule
  ],
  declarations: [ListeRapportsPage]
})
export class ListeRapportsPageModule {}
