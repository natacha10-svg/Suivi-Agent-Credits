import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminListeDemandeCreditPage } from './admin-liste-demande-credit.page';

const routes: Routes = [
  {
    path: '',
    component: AdminListeDemandeCreditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminListeDemandeCreditPageRoutingModule {}
