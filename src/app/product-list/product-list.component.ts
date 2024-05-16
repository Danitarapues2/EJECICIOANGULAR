import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: string[] | undefined;
  constructor(private cartService:CartService) {}
    ngOnInit() {
      this.products = this.cartService.getProducts();
    }
  }

