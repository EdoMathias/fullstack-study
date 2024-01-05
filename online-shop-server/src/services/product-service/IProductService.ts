import { Prodcut } from '../../models/product-model';

export interface IProductService {
  getProducts(): Promise<Prodcut[]>;
  getProduct(id: number): Promise<Prodcut | undefined>;
  createProduct(product: Prodcut): Promise<Prodcut>;
  editProduct(product: Prodcut): Promise<Prodcut>;
  deleteProduct(id: number): Promise<void>;
}
