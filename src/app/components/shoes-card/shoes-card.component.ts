import { Component, Input, OnInit } from '@angular/core';
import { Shoes } from 'src/app/models/shoe.model';

@Component({
  selector: 'app-shoes-card',
  templateUrl: './shoes-card.component.html',
  styleUrls: ['./shoes-card.component.scss'],
})
export class ShoesCardComponent {
  @Input() item!: Shoes;
}
