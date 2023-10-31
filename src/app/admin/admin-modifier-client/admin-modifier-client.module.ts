import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, NavParams } from '@ionic/angular';

import { AdminModifierClientPageRoutingModule } from './admin-modifier-client-routing.module';

import { AdminModifierClientPage } from './admin-modifier-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AdminModifierClientPageRoutingModule
  ],
  declarations: [AdminModifierClientPage],
  providers:[
    NavParams
  ]
})
export class AdminModifierClientPageModule {}
