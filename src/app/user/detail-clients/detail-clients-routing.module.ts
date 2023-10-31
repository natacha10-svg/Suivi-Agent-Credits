import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailClientsPage } from './detail-clients.page';

const routes: Routes = [
  {
    path: '',
    component: DetailClientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailClientsPageRoutingModule {}
