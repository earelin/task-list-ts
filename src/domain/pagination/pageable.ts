import { Sort } from './sort';

export interface Pageable {
  offset: number;
  pageNumber: number;
  pageSize: number;
  sort: Sort;

  first(): Pageable;

  next(): Pageable;
}

export class PageRequest implements Pageable {
  readonly #pageNumber: number;
  readonly #pageSize: number;
  readonly #sort: Sort;

  constructor(pageNumber: number, pageSize: number, sort?: Sort) {
    this.#pageNumber = pageNumber;
    this.#pageSize = pageSize;
    this.#sort = sort ?? Sort.unsorted();
  }

  first(): Pageable {
    return new PageRequest(0, this.#pageSize);
  }

  next(): Pageable {
    return new PageRequest(this.#pageNumber + 1, this.#pageSize);
  }

  get offset(): number {
    return this.#pageNumber * this.#pageSize;
  }

  get pageNumber(): number {
    return this.#pageNumber;
  }

  get pageSize(): number {
    return this.#pageSize;
  }

  get sort(): Sort {
    return this.#sort;
  }
}
