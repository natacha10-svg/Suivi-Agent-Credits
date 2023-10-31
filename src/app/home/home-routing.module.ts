import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { DashboardAdminPage } from '../admin/dashboard-admin/dashboard-admin.page';
import { DashboardUserPage } from '../user/dashboard-user/dashboard-user.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'dashboard-admin',
    component: DashboardAdminPage
  },
  {
    path: 'dashboard-user',
    component: DashboardUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
