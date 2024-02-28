import { ChangeEvent, useEffect, useState } from 'react';
import './List.css';
import { dataService } from '../../../Services/DataService';
import { notify } from '../../../Utils/Notify';
import { CategoryModel } from '../../../Models/category-model';
import { ProductModel } from '../../../Models/product-model';
import { useNavigate } from 'react-router-dom';

function List(): JSX.Element {
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const [products, setProducts] = useState<ProductModel[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    dataService
      .getAllCategories()
      .then((categories) => setCategories(categories))
      .catch((err) => notify.error(err));
  }, []);

  async function displayProducts(args: ChangeEvent<HTMLSelectElement>) {
    try {
      const select = args.target;
      const categoryId = +select.value;
      const products = await dataService.getProductsByCategories(categoryId);
      setProducts(products);
    } catch (error: any) {
      notify.error(error);
    }
  }

  async function editProduct(product: ProductModel) {
    navigate('/edit', {
      state: product,
    });
  }

  async function deleteProduct(productId: number) {
    try {
      await dataService.deleteProduct(productId);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
    } catch (error) {
      notify.error(error);
    }
  }

  return (
    <div className="List">
      <select
        defaultValue=""
        onChange={displayProducts}
        className="form-control w-25 m-5 mx-auto"
      >
        <option value="" disabled>
          Select category
        </option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <table className="table table-bordered table-hover w-75 mx-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Produced at</th>
            <th>Expires at</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.producedDateTime}</td>
              <td>{product.expiryDateTime}</td>
              <td>{product.price}</td>
              <td>
                <button
                  key={product.id}
                  onClick={() => {
                    editProduct(product);
                  }}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  key={product.id}
                  onClick={() => {
                    deleteProduct(product.id);
                  }}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
