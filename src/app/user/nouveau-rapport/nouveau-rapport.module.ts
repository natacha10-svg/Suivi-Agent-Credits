import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NouveauRapportPageRoutingModule } from './nouveau-rapport-routing.module';

import { NouveauRapportPage } from './nouveau-rapport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    NouveauRapportPageRoutingModule
  ],
  declarations: [NouveauRapportPage]
})
export class NouveauRapportPageModule {}
