import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig = {
  providers: [provideRouter(routes), provideHttpClient()],

  eventTypesUrl: 'http://localhost:4000/api/event-types/',
  eventsUrl: 'http://localhost:4000/api/events/',
};
