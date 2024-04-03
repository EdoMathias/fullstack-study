import express, { NextFunction, Request, Response } from "express";
import ProductModel from "../3-models/product-model";
import StatusCode from "../3-models/status-code";
import productsService from "../5-services/products-service";

const router = express.Router();

router.get("/products", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const products = await productsService.getAllProducts();
        response.json(products);
    }
    catch (err: any) { next(err); }
});

router.post("/products", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const product = new ProductModel(request.body);
        const addedProduct = await productsService.addProduct(product);
        response.status(StatusCode.Created).json(addedProduct);
    }
    catch (err: any) { next(err); }
});

export default router;
