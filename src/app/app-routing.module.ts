import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IsAuthenticatedGuard } from './guards/is-authenticated.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'liste-echeances',
    loadChildren: () => import('./user/liste-echeances/liste-echeances.module').then( m => m.ListeEcheancesPageModule)
  },
  {
    path: 'liste-clients',
    loadChildren: () => import('./user/liste-clients/liste-clients.module').then( m => m.ListeClientsPageModule)
  },
  {
    path: 'liste-rapports',
    loadChildren: () => import('./user/liste-rapports/liste-rapports.module').then( m => m.ListeRapportsPageModule)
  },
  {
    path: 'liste-impayes',
    loadChildren: () => import('./user/liste-impayes/liste-impayes.module').then( m => m.ListeImpayesPageModule)
  },
  {
    path: 'detail-clients/:id',
    loadChildren: () => import('./user/detail-clients/detail-clients.module').then( m => m.DetailClientsPageModule)
  },
  {
    path: 'nouveau-client',
    loadChildren: () => import('./user/nouveau-client/nouveau-client.module').then( m => m.NouveauClientPageModule)
  },
  {
    path: 'nouveau-rapport',
    loadChildren: () => import('./user/nouveau-rapport/nouveau-rapport.module').then( m => m.NouveauRapportPageModule)
  },
  {
    path: 'localiser-client/:id',
    loadChildren: () => import('./user/localiser-client/localiser-client.module').then( m => m.LocaliserClientPageModule)
  },
  {
    path: 'modifier-profil',
    loadChildren: () => import('./user/modifier-profil/modifier-profil.module').then( m => m.ModifierProfilPageModule)
  },
  {
    path: 'dashboard-user',
    loadChildren: () => import('./user/dashboard-user/dashboard-user.module').then( m => m.DashboardUserPageModule),
    canActivate:[IsAuthenticatedGuard]
  },
  {
    path: 'admin-liste-clients',
    loadChildren: ()=> import ('./admin/admin-liste-clients/admin-liste-clients.module').then( m=> m.AdminListeClientsPageModule),
  },
  {
    path: 'admin-liste-agents',
    loadChildren: ()=>import('./admin/admin-liste-agents/admin-liste-agents.module').then(m=>m.AdminListeAgentsPageModule),
  },
  {
    path: 'admin-liste-demande-credit',
    loadChildren: ()=>import('./admin/admin-liste-demande-credit/admin-liste-demande-credit.module').then( m=> m.AdminListeDemandeCreditPageModule),
  },
  {
    path: 'admin-liste-rapports',
    loadChildren: ()=> import('./admin/admin-liste-rapports/admin-liste-rapports.module').then(m=> m.AdminListeRapportsPageModule),

  },
  {
    path: 'admin-liste-impayes',
    loadChildren: () => import('./admin/admin-liste-impayes/admin-liste-impayes.module').then( m => m.AdminListeImpayesPageModule),
  },
  {
    path: 'dashboard-admin',
    loadChildren: () => import('./admin/dashboard-admin/dashboard-admin.module').then( m => m.DashboardAdminPageModule),
    canActivate:[IsAuthenticatedGuard]
  },
  {
    path: 'admin-detail-demande/:id',
    loadChildren: () => import('./admin/admin-detail-demande/admin-detail-demande.module').then( m => m.AdminDetailDemandePageModule)
  },
  {
    path: 'admin-modifier-agent/:id',
    loadChildren: () => import('./admin/admin-modifier-agent/admin-modifier-agent.module').then( m => m.AdminModifierAgentPageModule)
  },
  {
    path: 'admin-performance-agent/:id',
    loadChildren: () => import('./admin/admin-performance-agent/admin-performance-agent.module').then( m => m.AdminPerformanceAgentPageModule)
  },
  {
    path: 'admin-modifier-client/:id',
    loadChildren: () => import('./admin/admin-modifier-client/admin-modifier-client.module').then( m => m.AdminModifierClientPageModule)
  },
  {
    path: 'admin-localiser-client/:id',
    loadChildren: () => import('./admin/admin-localiser-client/admin-localiser-client.module').then( m => m.AdminLocaliserClientPageModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
    {
    path: '**',
    redirectTo: 'not-found',

  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
