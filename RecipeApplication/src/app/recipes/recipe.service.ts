import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  appId = 'b2f7ae20';
  appKey = 'c70e82a4806b8120c32b6cfaa61c679e';
  urlConfig = 'https://api.edamam.com/api/recipes/v2?type=public';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept-Language': 'en'
    })
  }

  constructor(private http:HttpClient) { }

  getRecipe(q:string) {
    let searchquery = this.urlConfig+'&q='+ q +'&app_id='+ this.appId +'&app_key='+ this.appKey;
    
    return this.http.get<any>(searchquery, this.httpOptions);
  } 

  /*----------------------Get one recipe------------------------*/

  getOneRecipe(id: string) {
    let searchquery = 'https://api.edamam.com/api/recipes/v2/' + id + '?type=public&app_id=' + this.appId + '&app_key=' + this.appKey;

    return this.http.get<any>(searchquery, this.httpOptions);
  } 

  /*-----------------------Filter buttons------------------------*/

  getBreakfast() {
    let breakfast = this.urlConfig+'&app_id='+this.appId +'&app_key='+ this.appKey+'&mealType=Breakfast';
    return this.http.get<any>(breakfast, this.httpOptions);
  }

  getDinner() {
    let dinner = this.urlConfig+'&app_id='+this.appId +'&app_key='+ this.appKey+'&mealType=Dinner';
    return this.http.get<any>(dinner, this.httpOptions);
  }

  getLunch() {
    let lunch = this.urlConfig+'&app_id='+this.appId +'&app_key='+ this.appKey+'&mealType=Lunch';
    return this.http.get<any>(lunch, this.httpOptions);
  }

  getStarter() {
    let starter = this.urlConfig+'&app_id='+this.appId +'&app_key='+ this.appKey+'&dishType=Starter';
    return this.http.get<any>(starter, this.httpOptions);
  }

  getMainCourse() {
    let mainCourse = this.urlConfig+'&app_id='+this.appId +'&app_key='+ this.appKey+'&dishType=Main%20course';
    return this.http.get<any>(mainCourse, this.httpOptions);
  }

  getDessert() {
    let dessert = this.urlConfig+'&app_id='+this.appId +'&app_key='+ this.appKey+'&dishType=Desserts';
    return this.http.get<any>(dessert, this.httpOptions);
  }

  /*-----------------------Filters for starting view-------------------------*/

  getVegetarian() {
    let vegetarian = this.urlConfig+'&q=vegetarian'+'&app_id='+ this.appId +'&app_key='+ this.appKey;;
    return this.http.get<any>(vegetarian, this.httpOptions);
  }

  getBread() {
    let bread = this.urlConfig+'&app_id='+this.appId +'&app_key='+ this.appKey+'&dishType=Bread';
    return this.http.get<any>(bread, this.httpOptions);
  }

  getSunday() {
    let sunday = this.urlConfig+'&app_id='+this.appId +'&app_key='+ this.appKey+'&dishType=Pancake&dishType=Sandwiches&dishType=Sweets';
    return this.http.get<any>(sunday, this.httpOptions);
  }

  /*-----------------------Error handler-------------------------*/

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
