
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientListComponent} from './component/clients/client-list/client-list.component';
import {CreateClientComponent} from './component/clients/create-client/create-client.component';
import {UpdateClientComponent} from './component/clients/update-client/update-client.component';
import {
  ClientDetailsComponent} from './component/clients/client-details/client-details.component';

const routes: Routes = [];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

