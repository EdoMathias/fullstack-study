import express from 'express';
import { appConfig } from './2-utils/app-config';
import { errorsMiddleware } from './4-middleware/errors-middleware';
import { loggerMiddleware } from './4-middleware/logger-middleware';
import { attackRouter } from './6-controllers/attack-controller';
import { dal } from './2-utils/dal';

// Main application class:
class App {
  // Express server:
  private server = express();

  // Start app:
  public start(): void {
    // Create a request.body containing the given json from the front:
    this.server.use(express.json());

    // Register middleware:
    this.server.use(loggerMiddleware.logToConsole);

    // Connect any controller route to the server:
    this.server.use('/api', attackRouter);

    // Route not found middleware:
    this.server.use(errorsMiddleware.routeNotFound);

    // Catch all middleware:
    this.server.use(errorsMiddleware.catchAll);

    // Connect to database:
    dal.connect();

    this.server.listen(appConfig.port, () =>
      console.log('Listening on http://localhost:' + appConfig.port)
    );
  }
}

const app = new App();
app.start();
