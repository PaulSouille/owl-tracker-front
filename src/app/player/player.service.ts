import { Injectable } from '@angular/core';
import PlayerStats from './player'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class PlayerService {
  private url_api = 'https://api.overwatchleague.com/';

  public getPlayerStats(idPlayer: string): Observable<PlayerStats> {
    const player = this.http.get<PlayerStats>(`${this.url_api}players`);
    return player;
  }
  constructor(private readonly http: HttpClient) {
   }
}
