import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
} from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const CreateProduct = () => {
  const [categoryId, setCategoryId] = useState('');

  const handleCategoryOptions = (event: string) => {
    switch (event) {
      case "men's clothing":
        setCategoryId('3');
        break;
      case 'jewelery':
        setCategoryId('2');
        break;
      case 'electronics':
        setCategoryId('1');
        break;
      case "women's clothing":
        setCategoryId('4');
        break;

      default:
        break;
    }
  };

  type FormState = {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    categoryId: string;
    image: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>({
    defaultValues: {
      id: '',
      title: '',
      price: undefined,
      description: '',
      category: '',
      categoryId: '',
      image: '',
    },
  });
  const submitProduct = async (product: FormState) => {
    console.log(product);
    try {
      await axios.post('http://localhost:3000/products', product);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error(error.response?.statusText);
      }
    }
  };
  return (
    <Box>
      <form onSubmit={handleSubmit(submitProduct)}>
        <Stack spacing={2}>
          <TextField
            {...register('id', { required: 'Id is required' })}
            id="id"
            name="id"
            label="Id"
            variant="standard"
            error={!!errors.id}
            helperText={errors.id?.message}
          />
          <TextField
            {...register('title', { required: 'Title is required' })}
            id="title"
            name="title"
            label="Title"
            variant="standard"
            error={!!errors.title}
            helperText={errors.title?.message}
          />
          <TextField
            {...register('price', {
              required: 'Price is required',
              min: { value: 1, message: 'Minimum price is 1' },
            })}
            id="price"
            name="price"
            label="Price"
            variant="standard"
            error={!!errors.price}
            helperText={errors.price?.message}
          />
          <TextField
            {...register('description', {
              required: 'Description is required',
            })}
            id="description"
            name="description"
            label="Description"
            variant="standard"
            error={!!errors.description}
            helperText={errors.description?.message}
          />
          <TextField
            {...register('category', {
              required: 'Category is required',
            })}
            id="category"
            name="category"
            label="Category"
            variant="standard"
            onChange={(e) => handleCategoryOptions(e.target.value)}
            error={!!errors.category}
            helperText={errors.category?.message}
          />
          <TextField
            {...register('categoryId', {
              required: 'CategoryId is required',
            })}
            id="categoryId"
            name="categoryId"
            label="CategoryId"
            variant="standard"
            value={categoryId}
            error={!!errors.categoryId}
            helperText={errors.categoryId?.message}
          />
          <TextField
            {...register('image', {
              required: 'Image is required',
            })}
            id="image"
            name="image"
            label="Image Url"
            variant="standard"
            error={!!errors.image}
            helperText={errors.image?.message}
          />

          <Button color="secondary" type="submit" variant="contained">
            Add New Product
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
