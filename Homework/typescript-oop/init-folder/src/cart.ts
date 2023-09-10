class ShoppingCart {
  constructor(public readonly products: ProductAndAmount[]) {}

  addProduct(product: Product) {
    //Todo: refactor this code to handle duplicate product.
    // const productAndAmount = new ProductAndAmount(product, 1);
    const productAndAmount: ProductAndAmount = {
      productId: 123,
      productName: 'aa',
      description: 'bb',
      price: 123,
      category: 'Food',
      amount: 2,
    };
    this.products.push(productAndAmount);
  }

  removeProduct(id: number) {
    const productAndAmount = this.products.find(
      (product) => product.productId === id
    );
    if (!productAndAmount) {
      throw new Error('Product was not found!');
    }
    if (productAndAmount.amount > 1) {
      productAndAmount.amount--;
    } else {
      this.products.splice(this.products.indexOf(productAndAmount), 1);
    }
  }

  getTotalPrice() {
    let total = 0;
    this.products.forEach(
      (product) => (total += product.price * product.amount)
    );
    return total;
  }
}
