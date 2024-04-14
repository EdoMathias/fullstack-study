import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig = {
  providers: [provideRouter(routes), provideHttpClient()],

  audiencesUrl: 'http://localhost:4000/api/audiences/',
  giftsByAudienceUrl: 'http://localhost:4000/api/gifts-by-audience/',
  giftsUrl: 'http://localhost:4000/api/gifts/',
};
