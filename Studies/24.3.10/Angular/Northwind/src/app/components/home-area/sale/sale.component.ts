import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sale',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.css',
})
export class SaleComponent {
  public price: number = Math.floor(Math.random() * 101) + 100;

  public now: Date = new Date();
  // public date: Date = new Date();
}
