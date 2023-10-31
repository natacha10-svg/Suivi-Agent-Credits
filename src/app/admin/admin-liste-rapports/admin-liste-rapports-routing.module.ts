import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminListeRapportsPage } from './admin-liste-rapports.page';

const routes: Routes = [
  {
    path: '',
    component: AdminListeRapportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminListeRapportsPageRoutingModule {}
