import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

import 'rxjs'
import 'rxjs/Rx'

import { Player } from "./player"

@Injectable()
export class PlayerService {

  constructor(private http: Http) { }

  createPlayer(new_player: Player){
    return this.http.post("/create", new_player).map(data => data.json()).toPromise()
  }

  getAllPlayers(){
    return this.http.get("/allPlayers").map(data => data.json()).toPromise()
  }

  removePlayer(id){
  	console.log(id)
  	return this.http.post("/delete", {id:id}).map(data => data.json()).toPromise()
  }

  nowPlayingGameOne(id, status){
    console.log("Service")
    console.log(id, status)
    return this.http.post("/playinggameone", {id:id, status:status}).map(data => data.json()).toPromise()
  }

  nowNotPlayingGameOne(id, status){
    console.log("Service")
    console.log(id, status)
    return this.http.post("/notplayinggameone", {id:id, status:status}).map(data => data.json()).toPromise()
  }

  nowUndecidedGameOne(id, status){
    console.log("Service")
    console.log(id, status)
    return this.http.post("/undecidedgameone", {id:id, status:status}).map(data => data.json()).toPromise()
  }

  nowPlayingGameTwo(id, status){
    console.log("Service")
    console.log(id, status)
    return this.http.post("/playinggametwo", {id:id, status:status}).map(data => data.json()).toPromise()
  }

  nowNotPlayingGameTwo(id, status){
    console.log("Service")
    console.log(id, status)
    return this.http.post("/notplayinggametwo", {id:id, status:status}).map(data => data.json()).toPromise()
  }

  nowUndecidedGameTwo(id, status){
    console.log("Service")
    console.log(id, status)
    return this.http.post("/undecidedgametwo", {id:id, status:status}).map(data => data.json()).toPromise()
  }

  nowPlayingGameThree(id, status){
    console.log("Service")
    console.log(id, status)
    return this.http.post("/playinggamethree", {id:id, status:status}).map(data => data.json()).toPromise()
  }

  nowNotPlayingGameThree(id, status){
    console.log("Service")
    console.log(id, status)
    return this.http.post("/notplayinggamethree", {id:id, status:status}).map(data => data.json()).toPromise()
  }

  nowUndecidedGameThree(id, status){
    console.log("Service")
    console.log(id, status)
    return this.http.post("/undecidedgamethree", {id:id, status:status}).map(data => data.json()).toPromise()
  }

}
