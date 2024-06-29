import { Product } from "./product.entity";

describe('Product Entity', () => {
  it.each(
    [0.15, 1728.99, 0, 99999]
  )('should create a product with correct price (%s)', (price) => {
    const product = new Product(price);
    expect(product.getPrice()).toStrictEqual(price);
  })
})