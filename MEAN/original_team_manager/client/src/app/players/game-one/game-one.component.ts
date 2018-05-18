import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"


import { Player } from "./../player"
import { PlayerService } from "./../player.service"

@Component({
  selector: 'app-game-one',
  templateUrl: './game-one.component.html',
  styleUrls: ['./game-one.component.css']
})
export class GameOneComponent implements OnInit {
	players: Array<Player>
	player: Player

  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit() {
  	this.playerService.getAllPlayers()
      .then(players => this.players = players)
      .catch(err => console.log("get all players error", err))
  }

  nowPlayingGameOne(id, status){
    this.playerService.nowPlayingGameOne(id, status)
      .then(() => console.log(id, status))
      .then(() =>
          this.ngOnInit())
      .catch(err => console.log("change player-game status error", err))
  }

  nowNotPlayingGameOne(id, status){
    this.playerService.nowNotPlayingGameOne(id, status)
      .then(() => console.log(id, status))
      .then(() =>
          this.ngOnInit())
      .catch(err => console.log("change player-game status error", err))
  }

  nowUndecidedGameOne(id, status){
    this.playerService.nowUndecidedGameOne(id, status)
      .then(() => console.log(id, status))
      .then(() =>
          this.ngOnInit())
      .catch(err => console.log("change player-game status error", err))
  }

}
