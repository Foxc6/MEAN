import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
	api_key = 'ce18edb058e82687cd9c4cde645622b5'
	city_id = 4138106
	weather

  constructor(private _weatherService: WeatherService) { 
    this._weatherService.getWeather(this.city_id, this.api_key)
    .then(weather => this.weather = weather)
    .catch(err => console.log("Burbank weather error", err))
  }

  ngOnInit() {
  }

}
