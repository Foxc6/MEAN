import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyanthree',
  templateUrl: './supersaiyanthree.component.html',
  styleUrls: ['./supersaiyanthree.component.css']
})
export class SupersaiyanthreeComponent implements OnInit {
	@Input() basePower
	superSaiyanThreePower

	getSuperSaiyanThreePower(){
		this.superSaiyanThreePower = this.basePower * 250
		return this.superSaiyanThreePower
	}

  constructor() { }

  ngOnInit() {
  }

}
