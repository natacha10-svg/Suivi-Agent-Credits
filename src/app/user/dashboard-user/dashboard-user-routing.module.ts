import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardUserPage } from './dashboard-user.page';

const routes: Routes = [
  {
    path: 'dashboard-user',
    component: DashboardUserPage,
    children: [
      {
        path: 'liste-echeances',
        loadChildren: () =>
          import('../liste-echeances/liste-echeances.module').then(
            (m) => m.ListeEcheancesPageModule
          ),
      },
      {
        path: 'liste-clients',
        loadChildren: () =>
          import('../liste-clients/liste-clients.module').then(
            (m) => m.ListeClientsPageModule
          ),
      },
      {
        path: 'liste-rapports',
        loadChildren: () =>
          import('../liste-rapports/liste-rapports.module').then(
            (m) => m.ListeRapportsPageModule
          ),
      },
      {
        path: 'liste-impayes',
        loadChildren: () =>
          import('../liste-impayes/liste-impayes.module').then(
            (m) => m.ListeImpayesPageModule
          ),
      },
      {
        path: '',
        redirectTo: 'dashboard-user/liste-echeances',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'dashboard-user/liste-echeances',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardUserPageRoutingModule {}
