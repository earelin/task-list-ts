import { Pageable } from './pageable';
import { Slice, SliceImpl } from './slice';

export interface Page<Type> extends Slice<Type> {
  totalElements: number;
  totalPages: number;
}

export class PageImpl<Type> implements Page<Type> {
  readonly #slice: Slice<Type>;
  readonly #totalElements: number;

  constructor(content: Type[], pageable: Pageable, total: number) {
    this.#slice = new SliceImpl<Type>(content, pageable);
    this.#totalElements = total;
  }

  get totalElements(): number {
    return this.#totalElements;
  }

  get totalPages(): number {
    return Math.ceil(this.#totalElements / this.#slice.size);
  }

  get content(): Type[] {
    return this.#slice.content;
  }

  get number(): number {
    return this.#slice.number;
  }

  get numberOfElements(): number {
    return this.#slice.numberOfElements;
  }

  get size(): number {
    return this.#slice.size;
  }
}
