import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent implements OnInit {
	@Input() basePower
	humanPower

	getHumanPower(){
		this.humanPower = this.basePower * 1
		return this.humanPower
	}

  constructor() { 
	}

  ngOnInit() {
  }

}
