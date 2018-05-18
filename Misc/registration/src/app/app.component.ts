import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
  message
  users = []
  user = {
  	firstName:'',
  	lastName:'',
  	email:'',
  	password:'',
  	streetAddress:'',
	unit:'',
	city:'',
	state:'',
  	lucky: null
  }

  onRegister(){
    this.users.push(this.user);
    this.message = true
    //console.log(this.user)
  }

  setLuckyFalse(){
    this.user.lucky = false;
  }

  setLuckyTrue(){
    this.user.lucky = true;
  }


}
