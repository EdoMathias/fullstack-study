import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { getCategories } from '../../services/categories-service';
import { createProduct } from '../../services/singleProduct-service';
import { Product } from '../../types/types';
import { v4 as uuid } from 'uuid';

export const CreateProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  type FormState = {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    categoryId: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>({
    defaultValues: {
      title: '',
      description: '',
    },
  });
  const submitProduct = (data: FormState) => {
    const product: Product = {
      id: uuid(),
      title: data.title,
      description: data.description,
      categoryId: data.category,
      category: categories?.find((category) => category.id === data.category)
        ?.title!,
      image: data.image,
      price: data.price,
      rating: {
        rate: 0,
        count: 0,
      },
    };
    mutation.mutate(product);
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(submitProduct)}>
        <Stack spacing={2}>
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
              valueAsNumber: true,
              required: 'Price is required',
              min: { value: 1, message: 'Minimum price is 1' },
            })}
            id="price"
            name="price"
            label="Price"
            variant="standard"
            type="number"
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
          <FormControl fullWidth variant="standard" error={!!errors.category}>
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              {...register('category', {
                required: 'Category is required',
              })}
              labelId="category-label"
              id="category"
              name="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories &&
                categories.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.title}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
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
