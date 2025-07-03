import { Pageable } from './pageable';

export interface Slice<Type> {
  content: Type[];
  number: number;
  numberOfElements: number;
  size: number;
}

export class SliceImpl<Type> implements Slice<Type> {
  readonly #content: Type[];
  readonly #pageable: Pageable;

  constructor(content: Type[], pageable: Pageable) {
    this.#content = content;
    this.#pageable = pageable;
  }

  get content(): Type[] {
    return this.#content;
  }

  get number(): number {
    return this.#pageable.pageNumber;
  }

  get numberOfElements(): number {
    return this.#content.length;
  }

  get size(): number {
    return this.#pageable.pageSize;
  }
}
