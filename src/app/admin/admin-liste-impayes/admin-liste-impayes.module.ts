import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminListeImpayesPageRoutingModule } from './admin-liste-impayes-routing.module';

import { AdminListeImpayesPage } from './admin-liste-impayes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminListeImpayesPageRoutingModule
  ],
  declarations: [AdminListeImpayesPage]
})
export class AdminListeImpayesPageModule {}
