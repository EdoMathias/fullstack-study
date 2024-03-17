import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from '../../../models/product.model';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent implements OnInit {
  public product = new ProductModel();

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  public async ngOnInit() {
    try {
      const id = +this.activatedRoute.snapshot.params['id'];
      this.product = await this.productsService.getProductById(id);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  public async send() {
    console.log(this.product);
    try {
      await this.productsService.updateProduct(this.product);
      console.log('Product has been added ');
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
