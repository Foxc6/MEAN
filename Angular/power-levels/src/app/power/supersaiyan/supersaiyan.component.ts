import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyan',
  templateUrl: './supersaiyan.component.html',
  styleUrls: ['./supersaiyan.component.css']
})
export class SupersaiyanComponent implements OnInit {
	@Input() basePower
	superSaiyanPower

	getSuperSaiyanPower(){
		this.superSaiyanPower = this.basePower * 90
		return this.superSaiyanPower
	}
  constructor() { }

  ngOnInit() {
  }

}
