import { Composite } from '../interfaces/composite.interface';

// conjunto que delega getPrice para as children (items).
export abstract class Container {
  protected items: Composite[] = [];
  
  getPrice(): number {
    return this.items.reduce((acc, item) => acc + item.getPrice(), 0);
  }
  
  addItem(item: Composite) {
    this.items.push(item);
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  getItems() {
    // TODO: melhoria: implementar padrão iterator.
    return this.items;
  } 
}