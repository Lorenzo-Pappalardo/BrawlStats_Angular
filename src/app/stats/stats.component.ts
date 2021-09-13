import { Component, OnInit } from '@angular/core';
import { Player, Error } from '../types';
import { StatsService } from './stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  playerData: Player;
  loading: boolean;
  error: string;

  constructor(private statsService: StatsService) {}

  ngOnInit() {
    this.loading = false;
  }

  isError(obj: any): obj is Error {
    if ((obj as Error).message) {
      return true;
    }
    return false;
  }

  fetchData(tag: string): void {
    this.loading = true;

    this.statsService.fetchData(tag).subscribe((res) => {
      if (this.isError(res)) {
        this.error = res.message;
      } else {
        this.playerData = res;
      }

      this.loading = false;
    });
  }
}
