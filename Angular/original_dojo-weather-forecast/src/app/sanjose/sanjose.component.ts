import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
	api_key = 'ce18edb058e82687cd9c4cde645622b5'
	city_id = 5392171
	weather

  constructor(private _weatherService: WeatherService) { 
  	this._weatherService.getWeather(this.city_id, this.api_key)
    .then(weather => this.weather = weather)
    .catch(err => console.log("San Jose weather error", err))
  }

  ngOnInit() {
  }

}
