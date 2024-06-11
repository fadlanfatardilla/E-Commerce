import { Injectable } from '@angular/core';
import { Shoes } from '../models/shoe.model';

@Injectable({
  providedIn: 'root',
})
export class ShoeService {
  getShoesList(): Shoes[] {
    return [
      {
        id: 1,
        title: 'Nike Air Force 1',
        price: 100,
        image: 'assets/images/nikeAirForce1.png',
        description:
          'The Nike Air Force 1 White is an iconic sneaker that has stood the test of time since its debut in 1982. Known for its clean and timeless design, this shoe features a classic low-top silhouette with a crisp white leather upper.',
      },
      {
        id: 2,
        title: 'Nike Dunk Low Grey',
        price: 150,
        image: 'assets/images/nikeDunkLow.png',
        description:
          'The Nike Dunk Low Grey is a stylish and versatile sneaker that combines a classic design with modern comfort. This shoe features a low-profile silhouette with a durable grey leather upper, providing a clean and understated look',
      },
      {
        id: 3,
        title: 'Adidas Yeezy Boost 350',
        price: 75,
        image: 'assets/images/AdidasYeezyBoost.png',
        description:
          'The Adidas Yeezy Boost 350 is a highly sought-after sneaker that represents the collaboration between Adidas and rapper Kanye West',
      },
      {
        id: 4,
        title: 'Puma Thunder Spectra',
        price: 80,
        image: 'assets/images/pumaThunder.png',
        description:
          'he Puma Thunder Spectra is a standout sneaker that captures the essence of modern streetwear with its bold design and chunky silhouette. Inspired by 90s running shoes and collaborations with designer Alexander McQueen, the Thunder Spectra blends vintage aesthetics with contemporary elements',
      },
      {
        id: 5,
        title: 'Nike Dunk Low Grey',
        price: 150,
        image: 'assets/images/nikeDunkLow.png',
        description:
          'The Nike Dunk Low Grey is a stylish and versatile sneaker that combines a classic design with modern comfort. This shoe features a low-profile silhouette with a durable grey leather upper, providing a clean and understated look',
      },
      {
        id: 6,
        title: 'Nike Dunk Low Grey',
        price: 150,
        image: 'assets/images/nikeDunkLow.png',
        description:
          'The Nike Dunk Low Grey is a stylish and versatile sneaker that combines a classic design with modern comfort. This shoe features a low-profile silhouette with a durable grey leather upper, providing a clean and understated look',
      },
    ];
  }

  getShoe(id: number): Shoes | undefined {
    return this.getShoesList().find((shoe) => shoe.id === id);
  }
}
