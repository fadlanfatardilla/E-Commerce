import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Shoes } from 'src/app/models/shoe.model';
import { ShoeService } from 'src/app/services/shoe.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  categories: Category[] = [];
  shoes: Shoes[] = [];

  constructor(private shoeService: ShoeService) {}

  ngOnInit() {
    this.getCategories();
    this.shoes = this.shoeService.getShoesList();
  }

  getCategories() {
    this.categories = [
      {
        id: 1,
        label: 'All',
        image: 'assets/images/sneakers.png',
        active: true,
      },
      {
        id: 2,
        label: 'Nike',
        image: 'assets/images/nike.png',
        active: false,
      },
      {
        id: 3,
        label: 'Adidas',
        image: 'assets/images/adidas.png',
        active: false,
      },
      {
        id: 4,
        label: 'Puma',
        image: 'assets/images/puma.png',
        active: false,
      },
    ];
  }
}
