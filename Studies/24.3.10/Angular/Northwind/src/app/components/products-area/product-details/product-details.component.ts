import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../../models/product.model';
import { ProductsService } from '../../../services/products.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  public product: ProductModel;

  public constructor(
    private title: Title,
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  public async ngOnInit() {
    try {
      const id = +this.route.snapshot.params['id'];
      this.title.setTitle(`Product ${id} - Details`);
      this.product = await this.productsService.getProductById(id);
      console.log(this.product);
    } catch (error) {
      alert(error);
    }
  }
}
