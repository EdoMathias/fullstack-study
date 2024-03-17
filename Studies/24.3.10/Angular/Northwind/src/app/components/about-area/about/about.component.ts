import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FacebookComponent } from '../facebook/facebook.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [FacebookComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  constructor(private title: Title) {}

  public ngOnInit(): void {
    console.log('ngOnInit');
    this.title.setTitle('Northwind - About');
  }
}
