import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, NavParams } from '@ionic/angular';

import { AdminModifierAgentPageRoutingModule } from './admin-modifier-agent-routing.module';

import { AdminModifierAgentPage } from './admin-modifier-agent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AdminModifierAgentPageRoutingModule
  ],
  declarations: [AdminModifierAgentPage],
  providers:[
    NavParams
  ]
})
export class AdminModifierAgentPageModule {}
