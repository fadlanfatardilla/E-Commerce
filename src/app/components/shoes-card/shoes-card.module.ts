import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoesCardComponent } from './shoes-card.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ShoesCardComponent],
  imports: [CommonModule, IonicModule],
  exports: [ShoesCardComponent],
})
export class ShoesCardModule {}
