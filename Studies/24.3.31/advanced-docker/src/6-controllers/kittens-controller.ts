import express, { NextFunction, Request, Response } from "express";
import logger from "../2-utils/logger";
import KittenModel from "../3-models/kitten-model";
import kittensService from "../5-services/kittens-service";
import StatusCode from "../3-models/status-code";

const router = express.Router();

router.get("/kittens", async (request: Request, response: Response, next: NextFunction) => {
    try {
        logger.logActivity("Returning all kittens...");
        const kittens = await kittensService.getAllKittens();
        response.json(kittens);
    }
    catch (err: any) { next(err); }
});

router.post("/kittens", async (request: Request, response: Response, next: NextFunction) => {
    try {
        logger.logActivity("Adding a new kittens...");
        request.body.image = request.files?.image;
        const kitten = new KittenModel(request.body);
        const addedKitten = await kittensService.addKitten(kitten);
        response.status(StatusCode.Created).json(addedKitten);
    }
    catch (err: any) { next(err); }
});

router.get("/kittens/images/:imageName", async (request: Request, response: Response, next: NextFunction) => {
    try {
        logger.logActivity("Returning kitten image...");
        const imageName = request.params.imageName;
        const imagePath = kittensService.getImagePath(imageName);
        response.sendFile(imagePath);
    }
    catch (err: any) { next(err); }
});

export default router;