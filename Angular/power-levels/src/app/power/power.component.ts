import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {

	power = { level: 0 }
	basePower
  
  onSubmit(){
    this.basePower = this.power.level   
  }

  constructor() { }

  ngOnInit() {
  }

}
