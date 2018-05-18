import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

import "rxjs"
import 'rxjs/Rx'

import { User } from "./user"

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  loginUser(checkUser: User){
    return this.http.post("/login", checkUser).map(data => data.json()).toPromise()
  }

  registerUser(newUser: User){
    return this.http.post("/register", newUser).map(data => data.json()).toPromise()
  }

}
