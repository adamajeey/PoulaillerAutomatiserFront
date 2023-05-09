import { LocalisationPoulaillerComponent } from './pages/localisation-poulailler/localisation-poulailler.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { HistoriqueComponent } from './pages/historique/historique.component';
import { ModifPasswordComponent } from './pages/modif-password/modif-password.component';
import { ParametrageComponent } from './pages/parametrage/parametrage.component';

const routes: Routes = [

  { component:SidebarComponent, path: 'accueil'},
  { component:HistoriqueComponent, path: 'historique'},
  { component:LoginComponent, path: '' },
  { component:ParametrageComponent, path: 'reglage' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
