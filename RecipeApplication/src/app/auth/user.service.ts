import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from '../user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  configUrl = "https://platerecipes-production.up.railway.app/api/";
  name: any = '';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer',
    })
  }

  constructor(private http: HttpClient, private router: Router) { }

  register(user: User) {
    this.http.post<any>(this.configUrl + 'register', user, this.httpOptions).pipe(catchError(this.handleError)).subscribe(res => {
      console.log(res)
      localStorage.setItem('token', res.token);
      localStorage.setItem("name", res.user.name);
      this.name = localStorage.getItem('name');
      window.location.reload();
    })
  }

  loginUser(user: User) {
    this.http.post<any>(this.configUrl + "login", user, this.httpOptions).pipe(catchError(this.handleError)).subscribe(res => {
      console.log(res)
      localStorage.setItem("token", res.token);
      localStorage.setItem("name", res.user.name);
      this.name = localStorage.getItem('name'); 
      window.location.reload();
    });
  }

  logoutUser(user: User) {
    this.httpOptions.headers = this.httpOptions.headers.set("Authorization", "Bearer " + localStorage.getItem("token"));
    this.http.post<any>(this.configUrl + "logout", user, this.httpOptions).pipe(catchError(this.handleError)).subscribe(res => {
      console.log(res)
      localStorage.clear();
      window.location.reload();
    });
  }

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
