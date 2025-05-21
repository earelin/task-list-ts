import { SliceImpl } from './slice';
import { PageRequest } from './pageable';

describe('SliceImpl', () => {
  it('should return correct content, number, size, and number of elements', () => {
    const content = [1, 2, 3];
    const pageable = new PageRequest(2, 5);
    const slice = new SliceImpl(content, pageable);

    expect(slice.getContent()).toEqual(content);
    expect(slice.getNumber()).toBe(2);
    expect(slice.getSize()).toBe(5);
    expect(slice.getNumberOfElements()).toBe(3);
  });

  it('should handle empty content', () => {
    const content: number[] = [];
    const pageable = new PageRequest(0, 10);
    const slice = new SliceImpl(content, pageable);

    expect(slice.getContent()).toEqual([]);
    expect(slice.getNumber()).toBe(0);
    expect(slice.getSize()).toBe(10);
    expect(slice.getNumberOfElements()).toBe(0);
  });
});
