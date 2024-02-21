import { appConfig } from './2-utils/app-config';
import { productsRouter } from './6-controllers/products-controller';
import express, { Express } from 'express';
import { supplierRouter } from './6-controllers/supplier-controller';
import { loggingMiddleware } from './4-middleware/logging-middleware';
import { securityMiddleware } from './4-middleware/security-middleware';
import { errorsMiddleware } from './4-middleware/errors-middleware';
import { sabbathForbiddenMiddleware } from './4-middleware/sabbathForbidden-middleware';
import { authRouter } from './6-controllers/auth-controller';
import { employeesRouter } from './6-controllers/employees-controller';
import expressFileUpload from 'express-fileupload';
import { fileSaver } from 'uploaded-file-saver';
import path from 'path';
import cors from 'cors';
import expressRateLimit from 'express-rate-limit';
import fs from 'fs';
import https from 'https';

class App {
  // Express server:
  private server: Express;

  public async start(): Promise<void> {
    // Configure file saver regarding which folderto save all images:
    fileSaver.config(path.join(__dirname, '1-assets', 'images'));

    // Create server
    this.server = express();

    // Enable rate limit:
    this.server.use(
      expressRateLimit({
        windowMs: 1000,
        limit: 10,
        skip: securityMiddleware.skipRateLimit,
      })
    );

    // Enable CORS:
    this.server.use(cors());

    // Tell express to create request.body from the given json:
    this.server.use(express.json());

    // Tell express to create request.files containing uploaded files:
    this.server.use(expressFileUpload());

    // Register middleware
    this.server.use(loggingMiddleware.logToConsole);
    this.server.use(loggingMiddleware.logToFile);
    // this.server.use(sabbathForbiddenMiddleware.blockOnSabbath);
    this.server.use(securityMiddleware.blacklist);

    // Register routes
    this.server.use(
      '/',
      productsRouter,
      employeesRouter,
      supplierRouter,
      authRouter
    );

    this.server.use(errorsMiddleware.routeNotFound);

    // Register error middleware
    this.server.use(errorsMiddleware.catchAll);

    // Listen on HTTP in development:
    if (appConfig.isDevelopment) {
      this.server.listen(appConfig.port, () => {
        console.log(`Listening on http://localhost:${appConfig.port}`);
      });
      return;
    }

    // Listen on HTTPS in production:
    const options = {
      cert: fs.readFileSync(
        path.join(
          __dirname,
          '1-assets',
          'cert',
          'localhost-2024-02-18-190936.cer'
        )
      ),
      key: fs.readFileSync(
        path.join(
          __dirname,
          '1-assets',
          'cert',
          'localhost-2024-02-18-190936.pkey'
        )
      ),
    };

    const httpsServer = https.createServer(options, this.server);
    httpsServer.listen(appConfig.port, () => {
      console.log(`Listening on https://localhost:${appConfig.port}`);
    });
  }
}

const app = new App();
app.start();
