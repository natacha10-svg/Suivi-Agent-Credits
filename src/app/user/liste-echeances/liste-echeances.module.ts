import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeEcheancesPageRoutingModule } from './liste-echeances-routing.module';

import { ListeEcheancesPage } from './liste-echeances.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeEcheancesPageRoutingModule
  ],
  declarations: [ListeEcheancesPage]
})
export class ListeEcheancesPageModule {}
