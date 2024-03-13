import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { SaleComponent } from '../sale/sale.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchComponent, SaleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(title: Title) {
    // Dependency injection
    title.setTitle('Northwind - Home');
  }
}
