import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { MenuComponent } from '../menu/menu.component';
import { HomeComponent } from '../../home-area/home/home.component';
import { RouterModule } from '@angular/router';

// ng g c components/layout-area/layout

@Component({
  selector: 'app-layout', // What is the component tag.
  standalone: true, // We're not a part of any Module.
  imports: [HeaderComponent, FooterComponent, MenuComponent, RouterModule], // Which other components or modules we can use.
  templateUrl: './layout.component.html', // Which is our html file.
  styleUrl: './layout.component.css', // Which is our css file.
})
export class LayoutComponent {}
