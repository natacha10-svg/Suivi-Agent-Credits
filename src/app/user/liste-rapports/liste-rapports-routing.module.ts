import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeRapportsPage } from './liste-rapports.page';

const routes: Routes = [
  {
    path: '',
    component: ListeRapportsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeRapportsPageRoutingModule {}
