import { dal } from '../2-utils/dal';
import { SupplierModel } from '../3-models/supplier-model';

class SupplierService {
  public async getAllSuppliers(): Promise<SupplierModel[]> {
    const sql = 'SELECT * FROM suppliers';
    const suppliers = await dal.exceute(sql);
    return suppliers;
  }
}

export const supplierService = new SupplierService();
