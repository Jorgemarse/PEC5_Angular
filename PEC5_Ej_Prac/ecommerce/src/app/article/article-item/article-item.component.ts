import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

export interface sneaker {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  isOnSale: boolean;
  quantityInCart: number;
}

@Component({
  selector: 'app-article-item',
  template: `
  <div class="sneaker-item" [ngClass]="{'available': sneaker.isOnSale, 'out': !sneaker.isOnSale}">
    <h2>{{sneaker.name}}</h2>
    <img class="sneaker-img" [src]="sneaker.imageUrl" alt="{{sneaker.name}}">
    <p class="sneaker-price" [ngClass]="{'': sneaker.isOnSale, 'out': !sneaker.isOnSale}">
    Precio: {{sneaker.price}} €</p>
    <div class="sneaker-quantity" *ngIf="sneaker.isOnSale">
    <button (click)="decrementQuantity()">-</button>
    <span>{{sneaker.quantityInCart}}</span>
    <button (click)="incrementQuantity()">+</button>
    </div>
  </div>



`,
  styles: [`
  .sneaker-item {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
    border: 1px solid #00000022;
  }
  .sneaker-img {
    width: 100%;
    max-width: 360px;
}
  .sneaker-item.available .sneaker-img {
    border: 2px solid #00000022;
  }
  .sneaker-item.out .sneaker-img {
    border: 2px solid red;
  }
      
    .sneaker-price.out {
        color: gray;
    }
    
    .sneaker-price {
        display: block;
        font-size: 1.6em;
      font-weight: bold;
  }
  
  .sneaker-quantity span {
      padding: 0 10px;
      font-size: 1.4em;
  }
  .sneaker-item h2{
    background-color: antiquewhite; 
    padding: 10px 20px 10px 20px;
    width:100%;
    text-align: center;
  }
  button{
    border-radius: 30px;
    background-color: antiquewhite; 
  }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleItemComponent implements OnInit {
  @Input() sneaker!: sneaker;
  @Output() quantityChange = new EventEmitter<{id: number, quantity: number}>();

  constructor() { 
  }

  ngOnInit(): void {
  }

  incrementQuantity() {
    this.sneaker.quantityInCart++;
    this.quantityChange.emit({id: this.sneaker.id, quantity: this.sneaker.quantityInCart});
  }

  decrementQuantity() {
    if (this.sneaker.quantityInCart > 0) {
      this.sneaker.quantityInCart--;
      this.quantityChange.emit({id: this.sneaker.id, quantity: this.sneaker.quantityInCart});
    }
  }
}
