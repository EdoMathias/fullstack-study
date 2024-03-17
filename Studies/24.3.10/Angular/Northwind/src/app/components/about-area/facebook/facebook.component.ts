import { Component, OnInit } from '@angular/core';
import { ColorsService } from '../../../services/colors.service';

@Component({
  selector: 'app-facebook',
  standalone: true,
  imports: [],
  templateUrl: './facebook.component.html',
  styleUrl: './facebook.component.css',
})
export class FacebookComponent implements OnInit {
  public color: string;

  public constructor(private colorsService: ColorsService) {}

  // Using a synchronous function:
  // public ngOnInit(): void {
  //   this.color = this.colorsService.generate();
  // }

  // Using an asynchronous function:
  // public async ngOnInit(): Promise<void> {
  //   this.color = await this.colorsService.generateAfterDelay();
  // }

  // Using an observable for many colors:
  public async ngOnInit() {
    const observable = this.colorsService.generateManyColorsAfterDelay();
    observable.subscribe({
      next: (randomColor) => (this.color = randomColor),
    });
  }
}
