import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NouveauClientPage } from './nouveau-client.page';

const routes: Routes = [
  {
    path: '',
    component: NouveauClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NouveauClientPageRoutingModule {}
