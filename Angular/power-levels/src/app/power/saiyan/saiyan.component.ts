import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-saiyan',
  templateUrl: './saiyan.component.html',
  styleUrls: ['./saiyan.component.css']
})
export class SaiyanComponent implements OnInit {
	@Input() basePower
	saiyanPower

	getSaiyanPower(){
		this.saiyanPower = this.basePower * 10
		return this.saiyanPower
	}
  constructor() { 

  }

  ngOnInit() {
  }

}
