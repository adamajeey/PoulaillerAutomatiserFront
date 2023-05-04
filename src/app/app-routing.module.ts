import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { HistoriqueComponent } from './pages/historique/historique.component';
import { ModifPasswordComponent } from './pages/modif-password/modif-password.component';

const routes: Routes = [
  {component:LoginComponent, path:'login'},
  {component:DashboardComponent, path: 'tableau' },
  { component:SidebarComponent, path: 'sidebar'},
  { component:HistoriqueComponent, path: 'historique'},
  { component:ModifPasswordComponent, path: 'password'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
