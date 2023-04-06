import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  allRecipes: any;
  searchquery = '';

  starter: any;
  mainCourse: any;
  dessert: any;
  lunch: any;
  dinner: any;
  breakfast: any;

  vegetarian: any;
  bread: any;
  sunday: any;

  user:User = {
    id: 0,
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  }
  checkIfLoggedIn: any;
  userToken: any;


  constructor(private recipeService: RecipeService, private route: ActivatedRoute, ) {

    /*-----------------------FILTER METHODS FOR STARTING VIEW-----------------------*/

    this.recipeService.getVegetarian().subscribe(result => {
      let vegetarian = result.hits.map((data: any) =>  {
        let recipe = data.recipe;
        recipe.idref = data._links.self.href.slice(38, 70);
        return recipe;
      })
      this.vegetarian = vegetarian;
  });

    this.recipeService.getBread().subscribe(result => {
      let bread = result.hits.map((data: any) =>  {
        let recipe = data.recipe;
        recipe.idref = data._links.self.href.slice(38, 70);
        return recipe;
      })
      this.bread = bread;
  });

  this.recipeService.getSunday().subscribe(result => {
    let sunday = result.hits.map((data: any) =>  {
      let recipe = data.recipe;
      recipe.idref = data._links.self.href.slice(38, 70);
      return recipe;
    })
    this.sunday = sunday;
  });

}


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

/*------------SEARCH RECIPE LIST--------------*/ 

getRecipe() {
  this.recipeService.getRecipe(this.searchquery).subscribe(result => {
    let recipes = result.hits.map((data: any) => {
      let recipe = data.recipe;
      recipe.idref = data._links.self.href.slice(38, 70);
      return recipe;
    })
    console.log(recipes);
    this.allRecipes = recipes;
  })
}

 /*------------RECIPE FILTER BUTTON METHODS--------------*/

 getDessert() {
  this.recipeService.getDessert().subscribe(result => {
    let dessert = result.hits.map((data: any) =>  {
      let recipe = data.recipe;
      recipe.idref = data._links.self.href.slice(38, 70);
      return recipe;
    })
    this.dessert = dessert;
});
}
 
 getMainCourse() {
  this.recipeService.getMainCourse().subscribe(result => {
    let mainCourse = result.hits.map((data: any) =>  {
      let recipe = data.recipe;
      recipe.idref = data._links.self.href.slice(38, 70);
      return recipe;
    })
    this.mainCourse = mainCourse;
});
}

 getStarter() {
  this.recipeService.getStarter().subscribe(result => {
    let starter = result.hits.map((data: any) =>  {
      let recipe = data.recipe;
      recipe.idref = data._links.self.href.slice(38, 70);
      return recipe;
    })
    this.starter = starter;
});
}

 getLunch() {
  this.recipeService.getLunch().subscribe(result => {
    let lunch = result.hits.map((data: any) =>  {
      let recipe = data.recipe;
      recipe.idref = data._links.self.href.slice(38, 70);
      return recipe;
    })
    this.lunch = lunch;
});
}

getBreakfast() {
  this.recipeService.getBreakfast().subscribe(result => {
    let breakfast = result.hits.map((data: any) =>  {
      let recipe = data.recipe;
      recipe.idref = data._links.self.href.slice(38, 70);
      return recipe;
    })
    this.breakfast = breakfast;
});
}

getDinner() {
  this.recipeService.getDinner().subscribe(result => {
    let dinner = result.hits.map((data: any) =>  {
      let recipe = data.recipe;
      recipe.idref = data._links.self.href.slice(38, 70);
      return recipe;
    })
    this.dinner = dinner;
});
}

/*-------------CLEAR SEARCH AND RELOAD PAGE---------*/

refresh() {
  window.location.reload();
}

}



