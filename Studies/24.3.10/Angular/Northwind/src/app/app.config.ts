import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig = {
  providers: [provideRouter(routes)],

  productsUrl: 'http://localhost:3030/api/products/',
};
