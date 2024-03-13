import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ProductModel } from '../../../models/product.model';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  public products: ProductModel[];
  // private productsService: ProductsService;

  constructor(title: Title, private productsService: ProductsService) {
    // Using the constructor for Dependency injection
    title.setTitle('Northwind - Products');

    // this.productsService = productsService;
  }

  public async showProducts() {
    try {
      this.products = await this.productsService.getAllProducts();
      console.log(this.products);
    } catch (error: any) {
      alert(error.message);
    }
  }
}
