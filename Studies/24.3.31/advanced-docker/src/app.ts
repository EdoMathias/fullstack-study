import express, { Request, Response } from "express";
import expressFileUpload from "express-fileupload";
import appConfig from "./2-utils/app-config";
import logger from "./2-utils/logger";
import catchAll from "./4-middleware/catch-all";
import routeNotFound from './4-middleware/route-not-found';
import kittensController from "./6-controllers/kittens-controller";

const server = express();

server.use(expressFileUpload());
server.get("/", (request: Request, response: Response) => response.send("<h1>Welcome to cute kittens REST API (Testing Volumes)</h1>"));
server.use("/api", kittensController);
server.use("*", routeNotFound);
server.use(catchAll);

server.listen(appConfig.port, () => {
    logger.logActivity("Server started...");
    console.log(`Listening on http://localhost:${appConfig.port}`);
});
