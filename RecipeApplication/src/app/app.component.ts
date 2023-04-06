import { Component, Input } from '@angular/core';
import { UserService } from './auth/user.service';
import { RecipeService } from './recipes/recipe.service';

import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecipeApplication';

  user:User = {
    id: 0,
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  }

  constructor(
    private userService: UserService,
    private recipeService: RecipeService,) {
  }

 

  /*------------AUTHMETODER--------------*/ 

  /* register() {
    this.userService.register(this.user) 
    console.log('you are registered!')
  } */
/* 
  logout() {
    this.userService.logoutUser(this.user)
    console.log('logging out');
  } */
}