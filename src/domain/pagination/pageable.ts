import { Sort } from './sort';

export interface Pageable {
  first(): Pageable;
  getOffset(): number;
  getPageNumber(): number;
  getPageSize(): number;
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

  getOffset(): number {
    return this.#pageNumber * this.#pageSize;
  }

  getPageNumber(): number {
    return this.#pageNumber;
  }

  getPageSize(): number {
    return this.#pageSize;
  }

  next(): Pageable {
    return new PageRequest(this.#pageNumber + 1, this.#pageSize);
  }

  getSort(): Sort {
    return this.#sort;
  }
}
