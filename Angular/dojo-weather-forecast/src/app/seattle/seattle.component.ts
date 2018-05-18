import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
	api_key = 'ce18edb058e82687cd9c4cde645622b5'
	city_id = 5809844
	weather

  constructor(private _weatherService: WeatherService) { 
    this._weatherService.getWeather(this.city_id, this.api_key)
    .then(weather => this.weather = weather)
    .catch(err => console.log("Seattle weather error", err))
  }

  ngOnInit() {
  }

}
