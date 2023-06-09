import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { OneRecipeComponent } from './recipes/one-recipe/one-recipe.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [ 
{ path: '', component: HomeComponent},
{ path: 'login', component: LoginComponent},
{ path: 'register', component: RegisterComponent},
{ path: 'recipe-list', component: RecipeListComponent},
{ path: 'one-recipe/:id', component: OneRecipeComponent},
{ path: '**', redirectTo: '', component: HomeComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
