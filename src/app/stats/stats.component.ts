import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
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

  constructor(
    private statsService: StatsService,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.loading = false;
  }

  isError(obj: any): obj is Error {
    if ((obj as Error).message) {
      return true;
    }
    return false;
  }

  async presentToast(text: string) {
    const toast = await this.toastController.create({
      message: text,
      duration: 2000,
    });
    toast.present();
  }

  fetchData(tag: string): void {
    this.loading = true;

    this.statsService.fetchData(tag).subscribe((res) => {
      if (this.isError(res)) {
        this.presentToast(res.message);
      }

      this.loading = false;
    });
  }
}
