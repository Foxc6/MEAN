import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import "rxjs"

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { 
  }

  getWeather(city_id, api_key){
  	return this._http.get('http://api.openweathermap.org/data/2.5/weather?id='+ city_id + '&&APPID=' + api_key).map(data => data.json()).toPromise()
  }

}
