import { useParams } from 'react-router-dom';

export const Category = () => {
  const { categoryId } = useParams();

  return <div>Category: {categoryId}</div>;
};
