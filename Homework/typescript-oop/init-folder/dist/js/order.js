"use strict";
class Order {
    constructor(id, payment, customer, productAndAmount, delivery) {
        this.id = id;
        this.payment = payment;
        this.customer = customer;
        this.productAndAmount = productAndAmount;
        this.delivery = delivery;
    }
}
