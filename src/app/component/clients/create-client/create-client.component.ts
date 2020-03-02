
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {clientModel} from '../client.model';
import {ClientService} from '../client.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


// @ts-ignore
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css']
})
export class CreateClientComponent implements OnInit {


  client: clientModel = new clientModel({});
  submitted = false;
  public selectedFile;
  validatingForm: FormGroup;
  imgURL: any;
  constructor(private ClientService: ClientService,
              private router: Router) { }

  ngOnInit() {
    this.validatingForm = new FormGroup({
      contactFormModalName: new FormControl('', Validators.required),
      contactFormModallastName: new FormControl('', Validators.required),
      contactFormModalcin: new FormControl('', Validators.required),
      contactFormModalEmail: new FormControl('', Validators.email),
      contactFormModalSubject: new FormControl('', Validators.required),
      contactFormModalMessage: new FormControl('', Validators.required)
    });
  }
  get contactFormModalName() {
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
    this.ClientService.createClient(this.client)
      .subscribe(data => console.log(data), error => console.log(error));
    this.client = new clientModel({});
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
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
}
