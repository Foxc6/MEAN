import { Component, OnInit } from '@angular/core'
import { Router } from "@angular/router"


import { Player } from "./../player"
import { PlayerService } from "./../player.service"

@Component({
  selector: 'app-game-three',
  templateUrl: './game-three.component.html',
  styleUrls: ['./game-three.component.css']
})
export class GameThreeComponent implements OnInit {
	players: Array<Player>
	player: Player

  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit() {
  	this.playerService.getAllPlayers()
      .then(players => this.players = players)
      .catch(err => console.log("get all players error", err))
  }

  nowPlayingGameThree(id, status){
    this.playerService.nowPlayingGameThree(id, status)
      .then(() => console.log(id, status))
      .then(() =>
          this.ngOnInit())
      .catch(err => console.log("change player-game status error", err))
  }

  nowNotPlayingGameThree(id, status){
    this.playerService.nowNotPlayingGameThree(id, status)
      .then(() => console.log(id, status))
      .then(() =>
          this.ngOnInit())
      .catch(err => console.log("change player-game status error", err))
  }

  nowUndecidedGameThree(id, status){
    this.playerService.nowUndecidedGameThree(id, status)
      .then(() => console.log(id, status))
      .then(() =>
          this.ngOnInit())
      .catch(err => console.log("change player-game status error", err))
  }

}
