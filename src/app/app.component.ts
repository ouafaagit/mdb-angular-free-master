import { Component } from '@angular/core';
import {Router} from '@angular/router';

// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client-web';
  constructor( private router: Router) {}
}
