import { Box } from "./box.entity";
import { Product } from "./product.entity";

describe('Box entity', () => {
  it('should create a box with correct price', () => {
    const product01 = new Product(30);
    const product02 = new Product(29.99);
    
    const box = new Box();
    box.addItem(product01);
    box.addItem(product02);

    expect(box.getPrice()).toStrictEqual(59.99)
  })

  it('should create a box with price 0', () => {
    const box = new Box();
    expect(box.getPrice()).toStrictEqual(0)
  })

  it('should create a box with price 0.01', () => {
    const product01 = new Product(0.01);
    
    const box = new Box();
    box.addItem(product01);

    expect(box.getPrice()).toStrictEqual(0.01)
  })

  it('should create a box with price 99999', () => {
    const product01 = new Product(99999);
    
    const box = new Box();
    box.addItem(product01);

    expect(box.getPrice()).toStrictEqual(99999);
  })
})