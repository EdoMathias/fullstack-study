const productAndAmount: ProductAndAmount[] = []; // begin with empty
const cart1 = new ShoppingCart([]);
// const user1 = new User(1, 'aa', 'bb', 'aa@bb.com', 123, 'password', cart1); //--> using User as class

const user1: User = {
  //--> using User as interface
  id: 123,
  firstName: 'aa',
  lastName: 'bb',
  mail: 'aa@bb.com',
  password: 'password',
  phoneNumber: 654321,
  cart: cart1,
};

// const product1 = new Product(1, 'product1', 'product1', 120, 'Food');
// const product2 = new Product(2, 'product2', 'product2', 100, 'Food');

const product1: Product = {
  productId: 1,
  productName: 'product1',
  description: 'product1',
  price: 120,
  category: 'Food',
};
const product2: Product = {
  productId: 2,
  productName: 'product2',
  description: 'product2',
  price: 100,
  category: 'Dairy',
};

user1.cart.addProduct(product1);
user1.cart.addProduct(product2);

console.log(user1.cart);

user1.cart.removeProduct(2);
console.log(user1.cart);

const order1 = new Order(
  1,
  'Credit Card',
  user1,
  user1.cart.products,
  'Delivery'
);
