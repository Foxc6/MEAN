import { Component, OnInit } from '@angular/core';

import { Car } from "./car";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
	first_name: string
	cars: Array<Car>
  new_car: Car

  constructor() { }

  ngOnInit() {
  	this.first_name = "Chris"
  	this.cars = [
  		{make: "Ford", model: "Mustang", year: 1980, color: "Red"},
  		{make: "Honda", model: "Civic", year: 2015, color: "Green"}
  	]

    this.new_car = new Car

  }
  addCar(){
    this.cars.push(this.new_car)
    this.new_car = new Car
  }

}
