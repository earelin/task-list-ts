import { Pageable } from './pageable';
import { Slice, SliceImpl } from './slice';

export interface Page<Type> extends Slice<Type> {
  getTotalElements(): number;
  getTotalPages(): number;
}

export class PageImpl<Type> implements Page<Type> {
  readonly #slice: Slice<Type>;
  readonly #totalElements: number;

  constructor(content: Type[], pageable: Pageable, total: number) {
    this.#slice = new SliceImpl<Type>(content, pageable);
    this.#totalElements = total;
  }

  getTotalElements(): number {
    return this.#totalElements;
  }

  getTotalPages(): number {
    return Math.ceil(this.#totalElements / this.#slice.getSize());
  }

  getContent(): Type[] {
    return this.#slice.getContent();
  }

  getNumber(): number {
    return this.#slice.getNumber();
  }

  getNumberOfElements(): number {
    return this.#slice.getNumberOfElements();
  }

  getSize(): number {
    return this.#slice.getSize();
  }
}
