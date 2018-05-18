import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { PlayerNewComponent } from './players/player-new/player-new.component';
import { PlayerListComponent } from './players/player-list/player-list.component';
import { GameOneComponent } from './players/game-one/game-one.component';
import { GameTwoComponent } from './players/game-two/game-two.component';
import { GameThreeComponent } from './players/game-three/game-three.component';

import { PlayerService } from "./players/player.service";


@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlayerNewComponent,
    PlayerListComponent,
    GameOneComponent,
    GameTwoComponent,
    GameThreeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
