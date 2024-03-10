import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  // Property binding:
  public tooltip =
    Math.random() < 0.5 ? 'Search website...' : 'Search something...';

  // Two-Way binding property:
  public textToSearch: string;

  public search(): void {
    alert('searching for ' + this.textToSearch);
    this.textToSearch = '';
  }
}
