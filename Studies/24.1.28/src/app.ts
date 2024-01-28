import { appConfig } from './2-utils/app-config';
import { productsRouter } from './6-controllers/products-controller';
import express, { Express } from 'express';

class App {
  // Express server:
  private server: Express;

  public async start(): Promise<void> {
    // Create server
    this.server = express();

    // Register routes
    this.server.use('/', productsRouter);

    // Listen on:
    this.server.listen(appConfig.port, () => {
      console.log(`Listening on http://localhost:${appConfig.port}`);
    });
  }
}

const app = new App();
app.start();
