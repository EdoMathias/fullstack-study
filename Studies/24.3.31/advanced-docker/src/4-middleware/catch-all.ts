import { NextFunction, Request, Response } from "express";
import logger from "../2-utils/logger";
import StatusCode from "../3-models/status-code";

function catchAll(err: any, request: Request, response: Response, next: NextFunction): void {
    console.log(err);
    logger.logError(err.message);
    response.status(err.status || StatusCode.InternalServerError).send(err.message);
}

export default catchAll;
