export type Category = {
  title: string;
  id: string;
};

export type Product = {
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
