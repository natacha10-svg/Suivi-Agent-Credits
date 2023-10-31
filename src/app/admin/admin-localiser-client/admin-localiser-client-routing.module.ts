import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLocaliserClientPage } from './admin-localiser-client.page';

const routes: Routes = [
  {
    path: '',
    component: AdminLocaliserClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminLocaliserClientPageRoutingModule {}
