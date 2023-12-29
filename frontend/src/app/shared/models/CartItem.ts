// Create Cart Item model

import { Vinyl } from './Vinyl';

export class CartItem {
  constructor(public vinyl: Vinyl) {}
  quantity: number = 1;
  price: number = this.vinyl.price;
}
