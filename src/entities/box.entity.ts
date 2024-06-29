import { Container } from "../core/abstracts/container";

export class Box extends Container {
  constructor() {
    super();
  }

  getPrice(): number {
    return Number((super.getPrice()).toFixed(2));
  }
}