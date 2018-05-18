import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyantwo',
  templateUrl: './supersaiyantwo.component.html',
  styleUrls: ['./supersaiyantwo.component.css']
})
export class SupersaiyantwoComponent implements OnInit {
	@Input() basePower
	superSaiyanTwoPower

	getSuperSaiyanTwoPower(){
		this.superSaiyanTwoPower = this.basePower * 150
		return this.superSaiyanTwoPower
	}

  constructor() { }

  ngOnInit() {
  }

}
