import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
	pst = Date.now();
	mst = Date.now() + (3.6e+6);
	cst = Date.now() + (7.2e+6); 
	est = Date.now() + (1.08e+7);
	empty = ' '
	time

	showPST(){
		this.time = this.pst
	}

	showMST(){
		this.time = this.mst
	}

	showCST(){
		this.time = this.cst
	}

	showEST(){
		this.time = this.est
	}

	clearTime(){
		this.time = null
	}
}
