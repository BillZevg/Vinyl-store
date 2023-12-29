import { Component } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { Order } from '../../../shared/Order';
import router from '../../../../../../backend/src/routers/order.router';
import { Router } from '@angular/router';
import { TitleComponent } from '../../partials/title/title.component';
import { OrderItemsListComponent } from '../../partials/order-items-list/order-items-list.component';
import { MapComponent } from '../../partials/map/map.component';
import { PaypalButtonsComponent } from '../../partials/paypal-buttons/paypal-buttons.component';

@Component({
  selector: 'app-payment-page',
  standalone: true,
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css'],
  imports: [
    TitleComponent,
    OrderItemsListComponent,
    MapComponent,
    PaypalButtonsComponent,
  ],
})
export class PaymentPageComponent {
  order: Order = new Order();
  constructor(orderService: OrderService, router: Router) {
    orderService.getNewOrderForCurrentUser().subscribe({
      next: (order) => {
        this.order = order;
      },
      error: () => {
        router.navigateByUrl('/checkout');
      },
    });
  }
}
