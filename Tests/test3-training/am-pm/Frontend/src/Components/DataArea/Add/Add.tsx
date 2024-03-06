import { useState, useEffect } from 'react';
import { dataService } from '../../../Services/DataService';
import { notify } from '../../../Utils/Notify';
import './Add.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { CategoryModel } from '../../../Models/category-model';
import { ProductModel } from '../../../Models/product-model';

function Add(): JSX.Element {
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const { register, handleSubmit } = useForm<ProductModel>();
  const navigate = useNavigate();

  useEffect(() => {
    dataService
      .getAllCategories()
      .then((categories) => setCategories(categories))
      .catch((err) => notify.error(err));
  }, []);

  async function send(product: ProductModel) {
    try {
      if (product.expiryDateTime === '') {
        product.expiryDateTime = null;
      }
      await dataService.addProduct(product);
      notify.success('Product has been added');
      navigate('/list');
    } catch (error: any) {
      notify.error(error);
    }
  }

  return (
    <div className="Add">
      <form onSubmit={handleSubmit(send)}>
        <label>Select category</label>
        <select
          defaultValue=""
          className="form-control"
          {...register('categoryId')}
          required
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

        <label>Name:</label>
        <input type="text" className="form-control" {...register('name')} />

        <label>Produced at:</label>
        <input
          type="datetime-local"
          className="form-control"
          {...register('producedDateTime')}
          required
        />

        <label>Expires at:</label>
        <input
          type="datetime-local"
          className="form-control"
          {...register('expiryDateTime')}
        />

        <label>price:</label>
        <input
          type="number"
          step="0.01"
          className="form-control"
          {...register('price')}
          required
          min={0}
          max={1000}
        />

        <button className="btn btn-primary">Add product</button>
      </form>
    </div>
  );
}

export default Add;
