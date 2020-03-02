import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {NgxPaginationModule} from 'ngx-pagination';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {RouterModule, Routes} from '@angular/router';
import {ClientListComponent} from './component/clients/client-list/client-list.component';
import {UpdateClientComponent} from './component/clients/update-client/update-client.component';
import {ClientDetailsComponent} from './component/clients/client-details/client-details.component';
import {CreateClientComponent} from './component/clients/create-client/create-client.component';
import {ClientService} from './component/clients/client.service';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  { path: '**', redirectTo: 'clients', pathMatch: 'full' },
  { path: 'clients', component: ClientListComponent },
  { path: 'add', component: CreateClientComponent },
  { path: 'update/:id', component: UpdateClientComponent },
  { path: 'details/:id', component: ClientDetailsComponent },
];
@NgModule({
  declarations: [
   AppComponent,
    CreateClientComponent,
    ClientDetailsComponent,
    ClientListComponent,
    UpdateClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    // MDBBootstrapModulesPro.forRoot(),
    FormsModule,
    RouterModule.forRoot(routes),
    CommonModule

  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
