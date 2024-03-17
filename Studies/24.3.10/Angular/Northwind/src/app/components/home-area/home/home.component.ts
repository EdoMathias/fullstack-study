import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class HomeComponent implements OnInit, OnDestroy {
  public constructor(private title: Title) {} // Dependency injection

  public ngOnInit(): void {
    console.log('ngOnInit');
    this.title.setTitle('Northwind - Home');
  }

  public ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
