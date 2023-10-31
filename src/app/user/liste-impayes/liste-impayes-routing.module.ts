import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeImpayesPage } from './liste-impayes.page';
import { DetailClientsPage } from '../detail-clients/detail-clients.page';

const routes: Routes = [
  {
    path: '',
    component: ListeImpayesPage
  },
  {
    path: 'detail-clients/:id',
    component: DetailClientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeImpayesPageRoutingModule {}
