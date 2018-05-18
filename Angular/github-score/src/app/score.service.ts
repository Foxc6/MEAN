import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ScoreService {

	user_name
  constructor(private _http: Http) { }

  retrieveScore(user_name, callback) {
  	console.log("The Service has the name: " + user_name)
    this._http.get('https://api.github.com/users/' + user_name).subscribe( 
      (response)=> { 
        this.user_name = response.json();
        callback(this.user_name);
      }, 
      (error)=> { console.log(error); }
    )
  }

}
