import { Box, Button, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';

export const CreateProduct = () => {
  type FormState = {
    title: string;
    description: string;
    price: number;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormState>({
    defaultValues: {
      title: '',
      description: '',
      price: undefined,
    },
  });
  const submitProduct = (product: FormState) => {
    console.log(product);
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
          <Button color="secondary" type="submit" variant="contained">
            Add New Product
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
