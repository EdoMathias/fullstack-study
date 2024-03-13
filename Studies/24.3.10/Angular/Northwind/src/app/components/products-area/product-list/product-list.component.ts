import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ProductModel } from '../../../models/product.model';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  public products: ProductModel[];

  constructor(private title: Title, private productsService: ProductsService) {}

  public async ngOnInit(): Promise<void> {
    try {
      console.log('ngOnInit');
      this.title.setTitle('Northwind - Products');
      this.products = await this.productsService.getAllProducts();
      console.log(this.products);
    } catch (error) {
      alert(error);
    }
  }
}
