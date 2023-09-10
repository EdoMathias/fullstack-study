// class User {
//   // shoppingCart: ShoppingCart;
//   private static userId: number;
//   constructor(
//     public id: number,
//     public firstName: string,
//     public lastName: string,
//     public mail: string,
//     public phoneNumber: number,
//     public password: string,
//     public readonly cart: ShoppingCart
//   ) {
//     // this.shoppingCart = new ShoppingCart();
//   }
// }

// interface User {
//   id: number;
//   firstName: string;
//   lastName: string;
//   mail: string;
//   phoneNumber: number;
//   password: string;
//   readonly cart: ShoppingCart;
// }

type User = {
  id: number;
  firstName: string;
  lastName: string;
  mail: string;
  phoneNumber: number;
  password: string;
  readonly cart: ShoppingCart;
};
