import { Component, OnInit } from '@angular/core';
import { StatsService } from './stats.service';

interface Player {
  club: {
    tag: 'string';
    name: 'string';
  };
  '3vs3Victories': 0;
  isQualifiedFromChampionshipChallenge: true;
  icon: {
    id: 0;
  };
  tag: 'string';
  name: 'string';
  trophies: 0;
  expLevel: 0;
  expPoints: 0;
  highestTrophies: 0;
  powerPlayPoints: 0;
  highestPowerPlayPoints: 0;
  soloVictories: 0;
  duoVictories: 0;
  bestRoboRumbleTime: 0;
  bestTimeAsBigBrawler: 0;
  brawlers: [
    {
      gadgets: [
        {
          name: unknown;
          id: 0;
        }
      ];
      starPowers: [
        {
          name: unknown;
          id: 0;
        }
      ];
      id: 0;
      rank: 0;
      trophies: 0;
      highestTrophies: 0;
      power: 0;
      name: unknown;
    }
  ];
  nameColor: 'string';
}

interface Error {
  message: string;
  name: string;
  stack: string;
  config: any;
}

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  playerData: Player | string | undefined;

  constructor(private statsService: StatsService) {}

  ngOnInit() {}

  isError(obj: any): obj is Error {
    if ((obj as Error).message) {
      return true;
    }
    return false;
  }

  fetchData(tag: string): void {
    this.statsService.fetchData(tag).subscribe((res) => {
      if (this.isError(res)) {
        this.playerData = res.message;
      } else {
        this.playerData = res;
      }
    });
  }

  prettyPrint() {
    console.log(this.playerData);
    return JSON.stringify(this.playerData);
  }
}
