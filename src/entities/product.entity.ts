import { Item } from "../core/abstracts/item";

export class Product extends Item {
  constructor(price: number) {
    super(price)
  }

  getPrice(): number {
    return super.getPrice();
  }
}