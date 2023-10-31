import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminListeClientsPage } from './admin-liste-clients.page';

const routes: Routes = [
  {
    path: '',
    component: AdminListeClientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminListeClientsPageRoutingModule {}
