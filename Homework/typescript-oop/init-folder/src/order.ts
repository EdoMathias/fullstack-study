type paymentOptions = 'Credit Card' | 'Paypal';
type Delivery = 'Delivery' | 'Pickup';

class Order {
  constructor(
    public id: number,
    public payment: paymentOptions,
    public customer: User,
    readonly productAndAmount: ProductAndAmount[],
    public delivery: Delivery
  ) {}
}
