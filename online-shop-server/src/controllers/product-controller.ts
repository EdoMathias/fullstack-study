import { Router } from 'express';
import db from '../db/db.json';
import { IProductService } from '../services/product-service/IProductService';

export const productRouter = (productService: IProductService) => {
  const router = Router();

  router.get('/', async (req, res) => {
    const products = await productService.getProducts();
    res.status(200).json(products);
  });

  router.get('/:id', async (req, res) => {
    const id = req.params.id;

    try {
      const product = await productService.getProduct(Number(id));
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: `Internal server error: ${error}` });
    }
  });

  router.post('/', async (req, res) => {
    const product = req.body;
    await productService.createProduct(product);
    res.status(201).json({ msg: 'Product created' });
  });

  router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const product = db.products.find((product) => product.id === Number(id));

    if (product) {
      res.status(200).json(product);
      const updatedProduct = req.body;
      await productService.editProduct(updatedProduct);
    } else {
      res.status(404).json({ msg: `Could not find product ${id}` });
    }
  });

  router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const idNum = Number(id);
    try {
      await productService.deleteProduct(idNum);
      res.status(200).json({ msg: `Successfully deleted product ${id}` });
    } catch (error) {
      res.status(500).json({ message: `Internal server error: ${error}` });
    }
  });

  return router;
};
