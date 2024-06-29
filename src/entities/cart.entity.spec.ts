import { Box } from "./box.entity";
import { Cart } from "./cart.entity";
import { Product } from "./product.entity";

describe('cart entity', () => {
  it('should create a cart with a box price', () => {
    const product01 = new Product(30);
    const product02 = new Product(20);
    
    const box = new Box();
    box.addItem(product01);
    box.addItem(product02);
    
    const cart = new Cart(0);
    cart.addItem(box);
    expect(cart.getPrice()).toStrictEqual(50);
  });

  it('should create a cart with correct price', () => {
    const product01 = new Product(30);
    const product02 = new Product(20);
    const product03 = new Product(5);
    
    const box = new Box();
    box.addItem(product01);
    box.addItem(product02);
    
    const cart = new Cart(2);
    cart.addItem(box);
    cart.addItem(product03);
    expect(cart.getPrice()).toStrictEqual(57);
  });

  it('should create a cart with correct price', () => {
    const product01 = new Product(30);
    const product02 = new Product(20);
    const product03 = new Product(70);
    
    const box = new Box();
    box.addItem(product01);
    box.addItem(product02);
    
    const cart = new Cart(13.45);
    cart.addItem(box);
    cart.addItem(box);
    cart.addItem(product03);
    expect(cart.getPrice()).toStrictEqual(183.45);
  });
});