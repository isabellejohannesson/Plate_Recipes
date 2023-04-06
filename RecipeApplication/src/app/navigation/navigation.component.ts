import { Component, OnInit } from '@angular/core';
import { UserService } from '../auth/user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
[x: string]: any;
  
  user:User = {
    id: 0,
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  }
  checkIfLoggedIn: any;
  userToken: any;

  hamburgerBtn: any;
  mobileMenu: any;


  ngOnInit(): void {
    this.checkIfLoggedIn = this.userLoggedIn();
    this.user.name = localStorage.getItem('name');
  }

  userLoggedIn(): boolean { 
    this.userToken = localStorage.getItem('token');
    if(this.userToken) {
      return true;
    } 
    else {
      return false;
    }
  }

  constructor(private userService: UserService, private router: Router) {
  }
  
  logout() {
    this.userService.logoutUser(this.user)
    console.log('logging out');
    this.router.navigate(['/']);
  }
}

