import { useState, useEffect } from 'react';
import { dataService } from '../../../Services/DataService';
import { notify } from '../../../Utils/Notify';
import './Edit.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { CategoryModel } from '../../../Models/category-model';
import { ProductModel } from '../../../Models/product-model';

function Edit(): JSX.Element {
  const [categories, setCategories] = useState<CategoryModel[]>([]);
  const [product, setProduct] = useState<ProductModel>();
  const { register, handleSubmit, setValue } = useForm<ProductModel>(); // Added setValue from react-hook-form
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setProduct(location.state);
    console.log('location state: ', location.state);

    dataService
      .getAllCategories()
      .then((categories) => setCategories(categories))
      .catch((err) => notify.error(err));

    if (product) {
      setValue('categoryId', product.categoryId);
      setValue('name', product.name);
      setValue('producedDateTime', formatDateTime(product.producedDateTime));
      setValue('expiryDateTime', formatDateTime(product.expiryDateTime));
      setValue('price', product.price);
    }
  }, [location.state, product, setValue]);

  const formatDateTime = (dateTimeString: string) => {
    const date = new Date(dateTimeString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  async function send(productToEdit: ProductModel) {
    try {
      productToEdit.id = product.id;
      await dataService.editProduct(productToEdit);
      notify.success('Product has been edited');
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
          required
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

        <button className="btn btn-primary">Edit product</button>
      </form>
    </div>
  );
}

export default Edit;
