import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { HistoriqueComponent } from './pages/historique/historique.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

/* import { ModifPasswordComponent } from './pages/modif-password/modif-password.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component'; */
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    HistoriqueComponent,
 /* ModifPasswordComponent,
    DashboardComponent */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
