import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminListeRapportsPageRoutingModule } from './admin-liste-rapports-routing.module';

import { AdminListeRapportsPage } from './admin-liste-rapports.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminListeRapportsPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [AdminListeRapportsPage]
})
export class AdminListeRapportsPageModule {}
