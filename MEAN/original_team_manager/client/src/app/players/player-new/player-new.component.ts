import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

import { Player } from "./../player"
import { PlayerService } from "./../player.service"

@Component({
  selector: 'app-player-new',
  templateUrl: './player-new.component.html',
  styleUrls: ['./player-new.component.css']
})
export class PlayerNewComponent implements OnInit {
	new_player: Player

  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit() {
  	this.new_player = new Player
  }

  addNewPlayer(){
    this.playerService.createPlayer(this.new_player)
      .then(() => this.router.navigate(["/players/list"]) )
      .catch(err => console.log("player create error", err))
  }

}
