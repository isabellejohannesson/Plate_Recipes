import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
 title = 'Find your perfect recipe'
 allRecipes: any;
 searchquery = '';

  starter: any;
  mainCourse: any;
  dessert: any;
  lunch: any;
  dinner: any;
  breakfast: any;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {

  }

  /* getRecipe() {
    this.recipeService.getRecipe(this.searchquery).subscribe(result => {
      let recipes = result.hits.map((data: any) => {
        let recipe = data.recipe;
        recipe.idref = data._links.self.href.slice(38, 70);
        return recipe;
      })
      console.log(recipes);
      this.allRecipes = recipes;
    })
  } */

 

 
  

 

  

  

  
}



