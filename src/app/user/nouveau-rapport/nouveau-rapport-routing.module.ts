import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NouveauRapportPage } from './nouveau-rapport.page';

const routes: Routes = [
  {
    path: '',
    component: NouveauRapportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NouveauRapportPageRoutingModule {}
