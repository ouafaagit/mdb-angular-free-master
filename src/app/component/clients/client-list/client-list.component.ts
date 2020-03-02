
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from '../client.service';
import {clientModel} from '../client.model';
import {DomSanitizer} from '@angular/platform-browser';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-employee-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: Observable<clientModel[]>;
  id: number;
  config: any;
  collection = { count: 0, clients: [] };
  client: clientModel = new clientModel({});
  submitted = false;
  public selectedFile;
  validatingForm: FormGroup;
  imgURL: any;

  constructor(private route: ActivatedRoute, private clientService: ClientService,
              private router: Router, private domSanitizer: DomSanitizer) {
    this.clientService.getAllClients().subscribe(response => this.collection.clients = response );
    this.collection.count = this.collection.clients.length;
    this.config = {
      itemsPerPage: 2,
      currentPage: 1,
      totalItems: this.collection.count
    };
  }

  ngOnInit() {

    this.client = new clientModel({});

    this.id = this.route.snapshot.params.id;

    this.clientService.getClient(this.id)
      .subscribe(data => {
        console.log(data);
        this.client = data;
      }, error => console.log(error));

    this.reloadData();
    this.validatingForm = new FormGroup({
      contactFormModalName: new FormControl('', Validators.required),
      contactFormModallastName: new FormControl('', Validators.required),
      contactFormModalcin: new FormControl('', Validators.required),
      contactFormModalEmail: new FormControl('', Validators.email),
      contactFormModalSubject: new FormControl('', Validators.required),
      contactFormModalMessage: new FormControl('', Validators.required)
    });
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
  reloadData() {
    this.clients = this.clientService.getAllClients();
  }

  deleteclient(id: number) {
    this.clientService.deleteClient(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  clientDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateclient(id: number) {
    this.router.navigate(['update', id]);
  }
  sane(imageSrc: any) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(imageSrc);
  }get contactFormModalName() {
    return this.validatingForm.get('contactFormModalName');
  }
  get contactFormModallastName() {
    return this.validatingForm.get('contactFormModallastName');
  }
  get contactFormModalcin() {
    return this.validatingForm.get('contactFormModalcin');
  }


  get contactFormModalEmail() {
    return this.validatingForm.get('contactFormModalEmail');
  }

  get contactFormModalSubject() {
    return this.validatingForm.get('contactFormModalSubject');
  }

  get contactFormModalMessage() {
    return this.validatingForm.get('contactFormModalMessage');
  }
  newclient(): void {
    this.submitted = false;

    this.client = new clientModel({});
  }

  save() {
    this.clientService.createClient(this.client)
      .subscribe(data => console.log(data), error => console.log(error));
    this.client = new clientModel({});
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
  delete() {
    this.clientService.deleteClient(this.id).subscribe(data => console.log(data), error => console.log(error));
    this.gotoList();
  }
  gotoList() {
    this.router.navigate(['/clients']);
  }
  public  onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };

  }
  // tslint:disable-next-line:adjacent-overload-signatures
  updateCclient() {
    this.clientService.updateClient(this.id, this.client)
      .subscribe(data => this.client, error => console.log(error));
    // @ts-ignore
    // this.client = new clientModel();
    this.gotoList();
  }

  onSuBbmit() {
    this.updateCclient();
  }

}
