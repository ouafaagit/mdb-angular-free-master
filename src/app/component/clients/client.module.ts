import {NgModule} from '@angular/core';
import {clientListModule} from './client-list/client-list.module';


// @ts-ignore
@NgModule({
  imports: [
    clientListModule
  ]
})
export class ClientModule {
}
