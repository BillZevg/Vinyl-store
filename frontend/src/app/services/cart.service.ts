import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Vinyl } from '../shared/models/Vinyl';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() {}

  // adds vinyl to the cart

  addToCart(vinyl: Vinyl): void {
    let cartItem = this.cart.items.find((item) => item.vinyl.id === vinyl.id);
    if (cartItem) return;

    this.cart.items.push(new CartItem(vinyl));
    this.setCartToLocalStorage();
  }

  // remove vinyl from the cart

  removeFromCart(vinylId: string): void {
    this.cart.items = this.cart.items.filter(
      (item) => item.vinyl.id != vinylId
    );
    this.setCartToLocalStorage();
  }

  // change quantity of items

  changeQuantity(vinylId: string, quantity: number) {
    let cartItem = this.cart.items.find((item) => item.vinyl.id === vinylId);
    if (!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.vinyl.price;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  getCart(): Cart {
    return this.cartSubject.value;
  }

  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.price,
      0
    );
    this.cart.totalCount = this.cart.items.reduce(
      (prevSum, currentItem) => prevSum + currentItem.quantity,
      0
    );

    // string reprentation of the cart
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}
