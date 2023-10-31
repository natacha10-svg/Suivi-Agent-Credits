import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminListeDemandeCreditPageRoutingModule } from './admin-liste-demande-credit-routing.module';

import { AdminListeDemandeCreditPage } from './admin-liste-demande-credit.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    AdminListeDemandeCreditPageRoutingModule
  ],
  declarations: [AdminListeDemandeCreditPage]
})
export class AdminListeDemandeCreditPageModule {}
