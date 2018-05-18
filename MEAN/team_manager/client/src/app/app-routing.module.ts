import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { PlayerNewComponent } from "./players/player-new/player-new.component"
import { PlayerListComponent } from "./players/player-list/player-list.component"
import { GameOneComponent } from "./players/game-one/game-one.component"
import { GameTwoComponent } from "./players/game-two/game-two.component"
import { GameThreeComponent } from "./players/game-three/game-three.component"


const routes: Routes = [
{ path: 'players/addplayer', pathMatch: 'full', component: PlayerNewComponent },
{ path: 'players/list', pathMatch: 'full', component: PlayerListComponent },
{ path: 'status/game/1', pathMatch: 'full', component: GameOneComponent },
{ path: 'status/game/2', pathMatch: 'full', component: GameTwoComponent },
{ path: 'status/game/3', pathMatch: 'full', component: GameThreeComponent },
{ path: '**', redirectTo: 'players/list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }