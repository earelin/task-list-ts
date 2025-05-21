export class Sort {
  static unsortedSort: Sort = new Sort([]);
  readonly #orders: SortOrder[];

  constructor(orders: SortOrder[]) {
    this.#orders = orders;
  }

  getOrders(): SortOrder[] {
    return this.#orders;
  }

  static unsorted() {
    return this.unsortedSort;
  }
}

export class SortOrder {
  readonly #direction: SortDirection;
  readonly #property: string;

  constructor(direction: SortDirection, property: string) {
    this.#direction = direction;
    this.#property = property;
  }

  getDirection(): SortDirection {
    return this.#direction;
  }

  getProperty(): string {
    return this.#property;
  }
}

export enum SortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}
