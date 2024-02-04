import { appConfig } from './2-utils/app-config';
import { productsRouter } from './6-controllers/products-controller';
import express, { Express } from 'express';
import { supplierRouter } from './6-controllers/supplier-controller';
import { loggingMiddleware } from './4-middleware/logging-middleware';
import { securityMiddleware } from './4-middleware/security-middleware';
import { errorsMiddleware } from './4-middleware/errors-middleware';
import { sabbathForbiddenMiddleware } from './4-middleware/sabbathForbidden-middleware';

class App {
  // Express server:
  private server: Express;

  public async start(): Promise<void> {
    // Create server
    this.server = express();

    // Tell express to create request.body from the given json:
    this.server.use(express.json());

    // Register middleware
    this.server.use(loggingMiddleware.logToConsole);
    this.server.use(loggingMiddleware.logToFile);
    this.server.use(sabbathForbiddenMiddleware.blockOnSabbath);
    this.server.use(securityMiddleware.blacklist);

    // Register routes
    this.server.use('/', productsRouter, supplierRouter);

    // Register error middleware
    this.server.use(errorsMiddleware.catchAll);

    // Listen on:
    this.server.listen(appConfig.port, () => {
      console.log(`Listening on http://localhost:${appConfig.port}`);
    });
  }
}

const app = new App();
app.start();
