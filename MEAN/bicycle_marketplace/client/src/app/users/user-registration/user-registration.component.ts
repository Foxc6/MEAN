import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { User } from "./../user"
import { UserService } from "./../user.service"

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
	newUser: User

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  	this.newUser = new User
  }

  registerUser(){
    this.userService.registerUser(this.newUser)
    .then(()=>console.log("registerUser in Component.ts is being hit"))
      .then(() => this.router.navigate(["/dashboard"]) )
      .catch(err => console.log("user register error", err))
  }

}
