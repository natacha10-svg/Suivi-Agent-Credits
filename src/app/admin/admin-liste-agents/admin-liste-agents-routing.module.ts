import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminListeAgentsPage } from './admin-liste-agents.page';
import { AdminListeClientsPage } from '../admin-liste-clients/admin-liste-clients.page';
import { AdminDetailDemandePage } from '../admin-detail-demande/admin-detail-demande.page';
import { AdminListeRapportsPage } from '../admin-liste-rapports/admin-liste-rapports.page';

const routes: Routes = [
  {
    path: '',
    component: AdminListeAgentsPage
  },
  {
    path: 'admin-liste-clients',
    component: AdminListeClientsPage
  },
  {
    path: 'admin-liste-demande-credit',
    component: AdminDetailDemandePage
  },
  {
    path: 'admin-liste-rapports',
    component: AdminListeRapportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminListeAgentsPageRoutingModule {}
