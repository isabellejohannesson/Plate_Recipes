import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/app/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  title = 'Sign up';

  user:User = {
    id: 0,
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  }

 constructor (private userService: UserService, private router: Router) {}

 register() {
  this.userService.register(this.user) 
  console.log('you are registered!')
  this.router.navigate(['/']);
}
}
