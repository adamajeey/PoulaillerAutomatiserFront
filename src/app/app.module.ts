import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
import { ModifPasswordComponent } from './pages/modif-password/modif-password.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { InfosPoulaillerComponent } from './pages/infos-poulailler/infos-poulailler.component';
import { LocalisationPoulaillerComponent } from './pages/localisation-poulailler/localisation-poulailler.component';
import { HttpClientModule } from '@angular/common/http';
import { ParametrageComponent } from './pages/parametrage/parametrage.component';
import { Socket, SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { TemphumService } from './services/temphum.service';
import { io } from 'socket.io-client';



const config: SocketIoConfig={
  url: 'http://localhost:3000',
  options : {
    transports : ['websocket']
  }
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    HistoriqueComponent,
    ModifPasswordComponent,
    DashboardComponent,
    InfosPoulaillerComponent,
    LocalisationPoulaillerComponent,
    ParametrageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    SocketIoModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
