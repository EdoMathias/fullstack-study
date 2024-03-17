import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

// ng g s services/colors

@Injectable({
  providedIn: 'root',
})
export class ColorsService {
  public generate(): string {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    return randomColor;
  }

  public generateAfterDelay(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        const randomColor =
          '#' + Math.floor(Math.random() * 16777215).toString(16);
        resolve(randomColor);
      }, 1000);
    });
  }

  public generateManyColorsAfterDelay(): Observable<string> {
    return new Observable<string>((observer: Observer<string>) => {
      setInterval(() => {
        const randomColor =
          '#' + Math.floor(Math.random() * 16777215).toString(16);
        observer.next(randomColor); // Like resolve, but can be invoked many times
      }, 1000);
    });
  }
}
