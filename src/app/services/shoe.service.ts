import { Injectable } from '@angular/core';
import { Shoes } from '../models/shoe.model';

@Injectable({
  providedIn: 'root',
})
export class ShoeService {
  private shoesList: Shoes[] = [
    {
      id: 1,
      title: 'Nike Air Force 1',
      price: 1.899,
      image: 'assets/images/nikeAirForce1.png',
      description:
        'The Nike Air Force 1 White is an iconic sneaker that has stood the test of time since its debut in 1982.',
      brand: 'Nike',
      popular: true,
    },
    {
      id: 2,
      title: 'Nike Dunk Low',
      price: 2.399,
      image: 'assets/images/nikeDunkLow.png',
      description:
        'The Nike Dunk Low Grey is a stylish and versatile sneaker that combines a classic design with modern comfort.',
      brand: 'Nike',
      popular: true,
    },
    {
      id: 3,
      title: 'Adidas Yeezy Boost 350',
      price: 2.699,
      image: 'assets/images/AdidasYeezyBoost.png',
      description:
        'The Adidas Yeezy Boost 350 is a highly sought-after sneaker that represents the collaboration between Adidas and rapper Kanye West',
      brand: 'Adidas',
    },
    {
      id: 4,
      title: 'Nike Dunk Low Retro',
      price: 1.549,
      image: 'assets/images/nike-dunk-low-retro.png',
      description:
        'The Nike Dunk Low Retro is a low-top version of the iconic Nike Dunk. It features the classic Dunk silhouette and appealing aesthetics, closely resembling its high-top counterpart.',
      brand: 'Nike',
    },
    {
      id: 5,
      title: 'Puma Thunder Spectra',
      price: 1.799,
      image: 'assets/images/pumaThunder.png',
      description:
        'The Puma Thunder Spectra is a standout sneaker that captures the essence of modern streetwear with its bold design and chunky silhouette.',
      brand: 'Puma',
      popular: true,
    },
    {
      id: 6,
      title: 'Nike Jordan 4 Retro',
      price: 1.399,
      image: 'assets/images/Jordan-4-retro.png',
      description:
        'The Nike Air Jordan 4 Retro is a classic sneaker that holds a special place in the history of basketball footwear.',
      brand: 'Nike',
    },
    {
      id: 7,
      title: 'Adidas Samba OG',
      price: 2.299,
      image: 'assets/images/samba-og.png',
      description:
        'The Adidas Samba OG is a classic sneaker that has stood the test of time, renowned for its timeless design and versatile functionality.',
      brand: 'Adidas',
      popular: true,
    },
    {
      id: 8,
      title: 'Nike Pegasus Running',
      price: 1.599,
      image: 'assets/images/Nike_pegasus.png',
      description:
        'The Nike Pegasus Running Shoes are designed for runners of all levels, offering a blend of comfort, durability, and style.',
      brand: 'Nike',
    },
    {
      id: 9,
      title: 'Puma Future Rider',
      price: 1.899,
      image: 'assets/images/pumaFutureRider.png',
      description:
        'The Puma Future Rider is a modern reinterpretation of Puma iconic Fast Rider from the 1980s, offering a sleek and comfortable design suitable for everyday wear.',
      brand: 'Puma',
    },
    {
      id: 10,
      title: 'Puma Cali Dream',
      price: 1.659,
      image: 'assets/images/cali-dream.png',
      description:
        'The Puma Cali Dream is a modern interpretation of the original Puma California from the 1980s, designed for casual and streetwear fashion.',
      brand: 'Puma',
    },
    {
      id: 11,
      title: 'Puma RS-X Games',
      price: 2.199,
      image: 'assets/images/RsXGames.png',
      description:
        'The Puma RX-Games is a futuristic sneaker that combines retro and contemporary elements, perfect for those looking to stand out. It features a bold and chunky design with a mix of mesh, suede, and leather overlays on the upper for durability and breathability.',
      brand: 'Puma',
    },
    {
      id: 12,
      title: 'Puma Clyde Varsity',
      price: 2.099,
      image: 'assets/images/clyde-varsity.png',
      description:
        'The Puma Clyde Varsity is a stylish and iconic sneaker inspired by the legendary basketball player Walt "Clyde" Frazier. Known for its clean and minimalist design, the shoe features a smooth suede upper with Puma Formstrip overlays on the sides.',
      brand: 'Puma',
    },
    {
      id: 13,
      title: 'Puma Suede Classic',
      price: 839,
      image: 'assets/images/suede-classic.png',
      description:
        'The Puma Suede Classic is an iconic sneaker that has stood the test of time, originally debuting in 1968. Renowned for its simple yet stylish design, the shoe features a premium suede upper with the signature Puma Formstrip on the sides.',
      brand: 'Puma',
    },
    {
      id: 14,
      title: 'Puma Slipstream Lo Gum',
      price: 1.289,
      image: 'assets/images/slipstream-logum.png',
      description:
        'The Puma Slipstream Lo Gum is a modern twist on the classic Slipstream basketball shoe, featuring a low-top silhouette and timeless design. This sneaker is crafted with a premium leather upper, providing a smooth and sophisticated look.',
      brand: 'Puma',
    },
    {
      id: 15,
      title: 'Puma Slipstream Xtreme',
      price: 1.099,
      image: 'assets/images/slipstream-xtreme.png',
      description:
        'The Puma Slipstream Xtreme is a bold sneaker that stands out with its daring design and striking aesthetics. Inspired by the original 1980s Slipstream, this updated version features premium leather, suede, and mesh materials for rich texture and enhanced durability.',
      brand: 'Puma',
    },
    {
      id: 16,
      title: 'Adidas Supernova Rise',
      price: 2.199,
      image: 'assets/images/supernova-rise.png',
      description:
        'The Adidas Supernova Rise is a high-performance running shoe with a breathable mesh upper for optimal airflow, keeping your feet cool and dry during runs.',
      brand: 'Adidas',
    },
  ];

  getShoesList(): Shoes[] {
    return this.shoesList;
  }

  getShoe(id: number): Shoes | undefined {
    return this.shoesList.find((shoe) => shoe.id === id);
  }

  searchShoes(searchTerm: string): Shoes[] {
    if (!searchTerm.trim()) {
      return this.shoesList;
    }
    return this.shoesList.filter(
      (shoe) =>
        shoe.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        shoe.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getPopularShoes(): Shoes[] {
    return this.shoesList.filter((shoe) => shoe.popular);
  }
}
