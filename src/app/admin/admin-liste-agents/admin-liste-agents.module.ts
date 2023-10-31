import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminListeAgentsPageRoutingModule } from './admin-liste-agents-routing.module';

import { AdminListeAgentsPage } from './admin-liste-agents.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule, 
    AdminListeAgentsPageRoutingModule
  ],
  declarations: [AdminListeAgentsPage]
})
export class AdminListeAgentsPageModule {}
