import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminModifierClientPage } from './admin-modifier-client.page';

const routes: Routes = [
  {
    path: '',
    component: AdminModifierClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminModifierClientPageRoutingModule {}
