import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../shared/models/CartItem';
import { Cart } from '../../../shared/models/Cart';
import { TitleComponent } from '../../partials/title/title.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { VinylPageComponent } from '../vinyl-page/vinyl-page.component';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
  imports: [
    TitleComponent,
    RouterLink,
    CommonModule,
    VinylPageComponent,
    NotFoundComponent,
    RouterOutlet,
    HttpClientModule,
  ],
})
export class CartPageComponent {
  cart!: Cart;
  constructor(private cartService: CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }
  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.vinyl.id);
  }
  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.vinyl.id, quantity);
  }
}
