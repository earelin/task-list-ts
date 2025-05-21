import { Pageable } from './pageable';

export interface Slice<Type> {
  getContent(): Type[];
  getNumber(): number;
  getNumberOfElements(): number;
  getSize(): number;
}

export class SliceImpl<Type> implements Slice<Type> {
  readonly #content: Type[];
  readonly #pageable: Pageable;

  constructor(content: Type[], pageable: Pageable) {
    this.#content = content;
    this.#pageable = pageable;
  }

  getContent(): Type[] {
    return this.#content;
  }

  getNumber(): number {
    return this.#pageable.getPageNumber();
  }

  getNumberOfElements(): number {
    return this.#content.length;
  }

  getSize(): number {
    return this.#pageable.getPageSize();
  }
}
