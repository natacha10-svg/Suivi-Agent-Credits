import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminListeClientsPageRoutingModule } from './admin-liste-clients-routing.module';

import { AdminListeClientsPage } from './admin-liste-clients.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    AdminListeClientsPageRoutingModule
  ],
  declarations: [AdminListeClientsPage]
})
export class AdminListeClientsPageModule {}
