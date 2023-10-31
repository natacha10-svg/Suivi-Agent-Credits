import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardAdminPageRoutingModule } from './dashboard-admin-routing.module';

import { DashboardAdminPage } from './dashboard-admin.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    DashboardAdminPageRoutingModule
  ],
  declarations: [DashboardAdminPage]
})
export class DashboardAdminPageModule {}
