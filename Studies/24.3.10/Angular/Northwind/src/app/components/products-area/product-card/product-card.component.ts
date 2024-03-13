import { Component, Input } from '@angular/core';
import { ProductModel } from '../../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() // Like props in React - get the value from the parent component
  public product: ProductModel;
}
