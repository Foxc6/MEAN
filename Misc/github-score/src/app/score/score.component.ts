import { Component, OnInit } from '@angular/core';
import { ScoreService } from './../score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

	user_name
	score: number = 0
  constructor(private _scoreService: ScoreService) { }

  ngOnInit() {
  }

  updateScore(user_name){
  	console.log("updateScore function being hit in the Score Component")
  	//console.log(this.user_name)
  	this._scoreService.retrieveScore(this.user_name, (user_name) => {
  		this.user_name = user_name
  		this.score = this.user_name.public_repos + this.user_name.followers
  	})
  }

}
