import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminModifierAgentPage } from './admin-modifier-agent.page';

const routes: Routes = [
  {
    path: '',
    component: AdminModifierAgentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminModifierAgentPageRoutingModule {}
