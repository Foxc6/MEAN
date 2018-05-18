import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { User } from "./../user"
import { UserService } from "./../user.service"

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
	checkUser: User

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  	this.checkUser = new User
  }

  loginUser(){
    this.userService.loginUser(this.checkUser)
      .then(() => this.router.navigate(["/dashboard"]) )
      .catch(err => console.log("user login error", err))
  }

}
