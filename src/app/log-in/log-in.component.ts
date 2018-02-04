import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { loggedInUser } from '../../environments/environment';
import { logInMessage } from '../../environments/environment';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private _login(): void {
    console.log('User clicked the log-in button');
    console.log(environment.users.length);
    console.log((document.getElementById('userLogInText') as HTMLInputElement).value);
    console.log((document.getElementById('passwordLogInText') as HTMLInputElement).value);
    var enteredUserName = (document.getElementById('userLogInText') as HTMLInputElement).value;
    var enteredPassword = (document.getElementById('passwordLogInText') as HTMLInputElement).value;
    var numberOfUsers = environment.users.length;
    var usecase = 0;
    for (var i = 0; i < numberOfUsers; i++) {
      if (environment.users[i].username === enteredUserName && environment.users[i].password === enteredPassword) {
        console.log('Successfully login');
        usecase = 1;
        break;
      }
      if (environment.users[i].username === enteredUserName && environment.users[i].password !== enteredPassword) {
        console.log('Wrong password');
        alert('Wrong password');
        usecase = 2;
        break;
      }
    }
    // user not found
    if (usecase === 0) {
      console.log('User not found');
      alert('User not found');
    }
    // loggedin succcessfully
    if (usecase === 1) {
      loggedInUser.username = enteredUserName;
      loggedInUser.password = enteredPassword;
      var userIndex;

      for (var i = 0; i < numberOfUsers; i++) {
        if (environment.users[i].username === loggedInUser.username) {
          userIndex = i;
          break;
        }
      }
      loggedInUser.name = environment.users[userIndex].name;
      loggedInUser.surname = environment.users[userIndex].surname;
      loggedInUser.email = environment.users[userIndex].email;
      loggedInUser.id = environment.users[userIndex].id;
      loggedInUser.userIndex = userIndex;
      loggedInUser.attendance = environment.users[userIndex].attendance;
      var numberAttendance = loggedInUser.attendance.length;
      alert('Successfully logged in. You can now go to profile.');
      logInMessage.message = 'Logged in ' + loggedInUser.username;
    }

  }
}
