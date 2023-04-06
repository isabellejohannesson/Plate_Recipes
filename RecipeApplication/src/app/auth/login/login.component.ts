import { Component } from '@angular/core';
import { UserService } from '../user.service';

import { User } from 'src/app/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  title = 'Log in';

  user:User = {
    id: 0,
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  }

  constructor ( private userService: UserService, private router: Router) {
   
  }
  
  login() {
    this.userService.loginUser(this.user)
    this.router.navigate(['/']);
  }

}
