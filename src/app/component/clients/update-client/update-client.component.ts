import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import {clientModel} from '../client.model';
import {ClientService} from '../client.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {

  id: number;
  client: clientModel;
  submitted = false;
  constructor(private route: ActivatedRoute, private router: Router,
              // tslint:disable-next-line:no-shadowed-variable
              private ClientService: ClientService) { }

  ngOnInit() {

    this.client = new clientModel({});

    this.id = this.route.snapshot.params.id;

    this.ClientService.getClient(this.id)
      .subscribe(data => {
        console.log(data);
        this.client = data;
      }, error => console.log(error));
  }

  updateclient() {
    this.ClientService.updateClient(this.id, this.client)
      .subscribe(data => this.client, error => console.log(error));
    // @ts-ignore
   // this.client = new clientModel();
    this.gotoList();
  }

  onSubmit() {
    this.updateclient();
  }

  gotoList() {
    this.router.navigate(['/clients']);
  }
}
