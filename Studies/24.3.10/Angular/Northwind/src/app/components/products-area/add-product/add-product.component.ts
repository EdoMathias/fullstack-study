import { Component } from '@angular/core';
import { ProductModel } from '../../../models/product.model';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  public product = new ProductModel();

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  public async send() {
    console.log(this.product);
    try {
      await this.productsService.addProduct(this.product);
      console.log('Product has been added ');
      // this.router.navigate(['/products']);
      this.router.navigateByUrl('/products');
    } catch (error: any) {
      console.log(error.message);
    }
  }

  public setImage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.product.image = input.files[0];
  }
}
