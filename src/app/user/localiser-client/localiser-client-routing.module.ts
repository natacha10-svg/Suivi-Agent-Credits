import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocaliserClientPage } from './localiser-client.page';

const routes: Routes = [
  {
    path: '',
    component: LocaliserClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocaliserClientPageRoutingModule {}
