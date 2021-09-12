import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { StatsComponent } from './stats.component';

import { StatsRoutingModule } from './stats-routing.module';

@NgModule({
  declarations: [StatsComponent],
  imports: [CommonModule, FormsModule, IonicModule, StatsRoutingModule],
})
export class StatsModule {}
