import { Composite } from "../interfaces/composite.interface";

// item simples, realiza de fato a implementação de getPrice.
export abstract class Item implements Composite {
  constructor(private price: number) {}

  getPrice(): number {
    return this.price;
  }
}