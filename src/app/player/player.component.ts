import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import PlayerStats from './player';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  playerStats: PlayerStats;
  constructor(private route: ActivatedRoute, private playerService: PlayerService) {
  }

  async ngOnInit() {
    const idPlayer = this.route.snapshot.paramMap.get('id');
    this.playerStats = await this.playerService.getPlayerStats(idPlayer).toPromise();
    console.log(this.playerStats);
  }

}
