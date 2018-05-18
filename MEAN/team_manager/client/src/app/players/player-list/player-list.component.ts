import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"


import { Player } from "./../player"
import { PlayerService } from "./../player.service"

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
	players: Array<Player>
	player: Player

  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit() {
  	this.playerService.getAllPlayers()
      .then(players => this.players = players)
      .catch(err => console.log("get all players error", err))
  }


  deletePlayer(id){
    if(confirm("Are you sure?")) {
      this.playerService.removePlayer(id)
        .then(() =>
          this.ngOnInit())
        .catch(err => console.log("delete player error", err))
    }
  }

}
