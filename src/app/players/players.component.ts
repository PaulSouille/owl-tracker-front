import { Component, OnInit } from '@angular/core';
import { PlayersService } from './players.service';
import Player from './players';
import {MatListModule} from '@angular/material/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  players: Player[];
  constructor(private playerService: PlayersService, private router: Router ) {
  }

  async ngOnInit() {
    const playersReturn = await this.playerService.getPlayers().toPromise();
    this.players = playersReturn['content'];
  }

  public showPlayer(playerId) {
    this.router.navigate([`/player/${playerId}`]);
  }

}
