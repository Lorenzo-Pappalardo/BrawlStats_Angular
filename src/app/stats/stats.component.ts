import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Player, isError } from '../types';
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

  constructor(
    private statsService: StatsService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.loading = false;
  }

  async presentToast(text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000,
    });
    toast.present();
  }

  toRGBA(rgbo: string): string {
    const rgb = '#' + rgbo.substr(4);
    return rgb + rgbo.substr(2, 2);
  }

  fetchData(tag: string): void {
    this.loading = true;

    this.statsService.fetchData(tag).subscribe((res) => {
      if (isError(res)) {
        this.presentToast(res.message);
      } else {
        res.nameColor = this.toRGBA(res.nameColor);
        this.playerData = res;
      }

      this.loading = false;
    });
  }

  getKeys(): string[] {
    return Object.keys(this.playerData).filter(
      (key) => !['nameColor', 'icon', 'brawlers'].includes(key)
    );
  }

  toPresentation(key: string): string {
    const regexp = /[A-Z]/;
    let res = '';

    for (let i = 0; i < key.length; i++) {
      if (i === 0) {
        res += key[i].toUpperCase();
      } else if (regexp.test(key[i])) {
        res += ' ' + key[i];
      } else {
        res += key[i];
      }
    }

    return res + ': ';
  }
}
