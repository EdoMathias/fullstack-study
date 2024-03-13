import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

// ng g c components/layout-area/menu

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {}
