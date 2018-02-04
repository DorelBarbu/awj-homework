import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { loggedInUser } from '../environments/environment';
import { logInMessage } from '../environments/environment';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <header>
  <!-- Partea de login -->
  <p id="logInMessage">
    {{logInMessage.message}}
  </p>
  </header>

  <div style="text-align:center">
    <h1>
      Welcome to {{ title }}!
    </h1>
  </div>

  <div style="text-align:center; width:270px; margin:auto">
    <button (click)="logInShow = !logInShow; attendanceShow = false; profileShow = false; registerShow = false">LogIn</button>
    <button (click)="logInShow = false; registerShow = !registerShow; attendanceShow = false; profileShow = false">Register</button>
    <button (click)="logInShow = false; registerShow = false; profileShow = !profileShow; attendanceShow = false">Profil</button>
    <button (click)="logInShow = false; registerShow = false; profileShow = false; attendanceShow=!attendanceShow">Attendance</button>

    <div id="logInContainer" *ngIf="logInShow" style="text-align:left">
      <app-log-in></app-log-in>
    </div>
 
    <div id="registerContainer" *ngIf="registerShow" style="text-align:left">
      <app-register></app-register>
    </div>
    
    <div id="profileContainer" *ngIf="profileShow" style="text-align:left">
      <app-profile></app-profile>
    </div>

    <div id="attendanceContainer" *ngIf="attendanceShow" style="text-align:left">
      <app-attendance></app-attendance>
    </div>
  </div>

`
})

export class AppComponent {
  title = 'Login';
  environment = environment;
  loggedInUser = loggedInUser;
  logInMessage = logInMessage;
}
