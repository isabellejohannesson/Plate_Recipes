import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { User } from 'src/app/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-recipe',
  templateUrl: './one-recipe.component.html',
  styleUrls: ['./one-recipe.component.css']
})
export class OneRecipeComponent implements OnInit {
  title = 'Show one recipe';
  recipe = {
    label: '',
    image: '',
    ingredientLines: []
  };
  id = '';

  constructor(private recipeService:RecipeService, private route: ActivatedRoute){
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.id = params['id'];

      this.recipeService.getOneRecipe(this.id).subscribe(result => {
        this.recipe = result.recipe;
        console.log(result)
      })
    });
  }



}
