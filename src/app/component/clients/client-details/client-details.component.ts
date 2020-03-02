
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {clientModel} from '../client.model';
import {ClientService} from '../client.service';


// @ts-ignore
@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})

export class ClientDetailsComponent implements OnInit {

  id: number;
  client: clientModel;


  constructor(private route: ActivatedRoute, private router: Router,
              private clienService: ClientService) { }

  ngOnInit() {
    this.client = new clientModel({});

    this.id = this.route.snapshot.params.id;

    this.clienService.getClient(this.id)
      .subscribe(data => {
        console.log(data);
        this.client = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['clients']);
  }
}
