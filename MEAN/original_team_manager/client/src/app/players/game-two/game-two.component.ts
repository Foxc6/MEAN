import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"


import { Player } from "./../player"
import { PlayerService } from "./../player.service"

@Component({
  selector: 'app-game-two',
  templateUrl: './game-two.component.html',
  styleUrls: ['./game-two.component.css']
})
export class GameTwoComponent implements OnInit {
	players: Array<Player>
	player: Player

  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit() {
  	this.playerService.getAllPlayers()
      .then(players => this.players = players)
      .catch(err => console.log("get all players error", err))
  }

  nowPlayingGameTwo(id, status){
    this.playerService.nowPlayingGameTwo(id, status)
      .then(() => console.log(id, status))
      .then(() =>
          this.ngOnInit())
      .catch(err => console.log("change player-game status error", err))
  }

  nowNotPlayingGameTwo(id, status){
    this.playerService.nowNotPlayingGameTwo(id, status)
      .then(() => console.log(id, status))
      .then(() =>
          this.ngOnInit())
      .catch(err => console.log("change player-game status error", err))
  }

  nowUndecidedGameTwo(id, status){
    this.playerService.nowUndecidedGameTwo(id, status)
      .then(() => console.log(id, status))
      .then(() =>
          this.ngOnInit())
      .catch(err => console.log("change player-game status error", err))
  }

}
