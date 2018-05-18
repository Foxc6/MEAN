import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  buttons: Array<boolean> = [false, false, false, false, false, false, false, false]

  changeButton(idx){
  	//console.log("Button event is working")
  	this.buttons[idx] = !this.buttons[idx];
  }
}
