import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPerformanceAgentPage } from './admin-performance-agent.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPerformanceAgentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPerformanceAgentPageRoutingModule {}
