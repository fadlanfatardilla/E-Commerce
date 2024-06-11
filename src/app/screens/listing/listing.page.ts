import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { Shoes } from 'src/app/models/shoe.model';
import { ShoeService } from 'src/app/services/shoe.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.page.html',
  styleUrls: ['./listing.page.scss'],
})
export class ListingPage implements OnInit {
  categories: Category[] = [];
  shoes: Shoes[] = [];
  filteredShoes$: Observable<Shoes[]> = of([]);

  constructor(private shoeService: ShoeService, private router: Router) {}

  ngOnInit() {
    this.getCategories();
    this.shoes = this.shoeService.getShoesList();
    this.filteredShoes$ = of(this.shoeService.getPopularShoes());
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

  onSearchChange(searchTerm: string) {
    this.filteredShoes$ = of(this.shoeService.searchShoes(searchTerm));
  }

  goToDetailPage(id: number) {
    this.router.navigate(['detail', id]);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  goToWishlist() {
    this.router.navigate(['/wishlist']);
  }
  goToProfile() {
    this.router.navigate(['/user-profile']);
  }

  goToCategoryPage(item: Category) {
    const categoryLabel = item.label.toLowerCase();
    this.router.navigate([`/category/${categoryLabel}`]);
  }
}
