export class Sort {
  static unsortedSort: Sort = new Sort([]);
  readonly #orders: SortOrder[];

  constructor(orders: SortOrder[]) {
    this.#orders = orders;
  }

  get orders(): SortOrder[] {
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

  get direction(): SortDirection {
    return this.#direction;
  }

  get property(): string {
    return this.#property;
  }
}

export enum SortDirection {
  ASC = 'ASC',
  DESC = 'DESC',
}
