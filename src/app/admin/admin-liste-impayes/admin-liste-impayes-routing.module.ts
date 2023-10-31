import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminListeImpayesPage } from './admin-liste-impayes.page';

const routes: Routes = [
  {
    path: '',
    component: AdminListeImpayesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminListeImpayesPageRoutingModule {}
