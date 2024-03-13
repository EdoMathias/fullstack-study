import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { SaleComponent } from '../sale/sale.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, SaleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
