import { Component, OnInit, NgModule } from '@angular/core';
import { PlayersComponent } from 'app/players/players.component';

@NgModule({
  declarations: [
    PlayersComponent
  ],
})
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ngOnInit(): void {
    // throw new Error("Method not implemented.");
  }

  constructor() {


   }


}
