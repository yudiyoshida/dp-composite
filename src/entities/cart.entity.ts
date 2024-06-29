import { Container } from "../core/abstracts/container";

// carrinho de compras é tipo um container (daqueles usados em transporte marítimo)
// que armazena cargas, mas em uma escala menor (produtos no lugar de cargas).
export class Cart extends Container {
  constructor(private deliveryFare: number) {
    super();
  }

  getPrice(): number {
    const total = super.getPrice();

    return Number((total + this.deliveryFare).toFixed(2));
  }
}