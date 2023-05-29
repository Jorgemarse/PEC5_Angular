import { Component, OnInit } from '@angular/core';
import { sneaker } from '../article-item/article-item.component'

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  public sneakers: sneaker[] = [
    {
      id: 1,
      name: 'Air Jordan',
      imageUrl:'assets/jordan.jpg',
      price: 150,
      isOnSale: true,
      quantityInCart: 0,
    },
    {
      id: 2,
      name: 'Basketball Nike Lebron James',
      imageUrl:'assets/nike-lebron.jpg',
      price: 110,
      isOnSale: true,
      quantityInCart: 0,
    },
    {
      id: 3,
      name: 'Basketball Nike Kevin Durant',
      imageUrl:'assets/nike-kd.jpg',
      price: 100,
      isOnSale: false,
      quantityInCart: 0,
    },
  ];

  ngOnInit(): void {
  }

  onQuantityChange(event: {id: number, quantity: number}) {
    const index = this.sneakers.findIndex(sneaker => sneaker.id === event.id);
    if (index !== -1) {
      this.sneakers[index].quantityInCart = event.quantity;
    }
  }

}
