import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDetailDemandePage } from './admin-detail-demande.page';

const routes: Routes = [
  {
    path: '',
    component: AdminDetailDemandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDetailDemandePageRoutingModule {}
