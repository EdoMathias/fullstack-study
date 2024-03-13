import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent implements OnInit {
  constructor(private title: Title) {}

  public ngOnInit(): void {
    console.log('ngOnInit');
    this.title.setTitle('Northwind - Contact us');
  }
}
