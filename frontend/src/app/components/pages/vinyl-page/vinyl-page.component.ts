import { Component } from '@angular/core';
import { Vinyl } from '../../../shared/models/Vinyl';
import { ActivatedRoute, Router } from '@angular/router';
import { VinylService } from '../../../services/vinyl.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { NotFoundComponent } from '../../partials/not-found/not-found.component';

@Component({
  selector: 'app-vinyl-page',
  standalone: true,
  templateUrl: './vinyl-page.component.html',
  styleUrls: ['./vinyl-page.component.css'],
  imports: [CommonModule, NotFoundComponent],
})
export class VinylPageComponent {
  vinyl!: Vinyl;

  constructor(
    activatedRoute: ActivatedRoute,
    vinylService: VinylService,
    private cartService: CartService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.id)
        vinylService.getVinylById(params.id).subscribe((serverVinyl) => {
          this.vinyl = serverVinyl;
        });
    });
  }
  addToCart() {
    this.cartService.addToCart(this.vinyl);
    this.router.navigateByUrl('/cart-page');
  }
}
