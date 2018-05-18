import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
	api_key = 'ce18edb058e82687cd9c4cde645622b5'
	city_id = 3582383
	weather

  constructor(private _weatherService: WeatherService) { 
    this._weatherService.getWeather(this.city_id, this.api_key)
    .then(weather => this.weather = weather)
    .catch(err => console.log("Burbank weather error", err))
  }

  ngOnInit() {
  }

}
