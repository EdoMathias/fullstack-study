type Category = 'Food' | 'Dairy';

// class Product {
//   constructor(
//     public productId: number,
//     public productName: string,
//     public description: string,
//     public price: number,
//     public category: Category
//   ) {}
// }

// class ProductAndAmount extends Product {
//   constructor(public product: Product, public amount: number) {
//     super(
//       product.productId,
//       product.productName,
//       product.description,
//       product.price,
//       product.category
//     );
//   }
// }
// const milk = new Product(1, 'Milk 2%', 'Milk 2%', 8, 'Dairy');

interface Product {
  productId: number;
  productName: string;
  description: string;
  price: number;
  category: Category;
}

interface ProductAndAmount extends Product {
  amount: number;
}
