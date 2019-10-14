import { Injectable } from '@angular/core';
import Player from './players'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class PlayersService {
  private url_api = 'https://api.overwatchleague.com/';

  public getPlayers(): Observable<Player[]> {
    const players = this.http.get<Player[]>(`${this.url_api}players`);
    return players;
  }
  constructor(private readonly http: HttpClient) {
   }
}
