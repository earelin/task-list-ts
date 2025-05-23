import { SliceImpl } from './slice';
import { PageRequest } from './pageable';

describe('SliceImpl', () => {
  it('should return correct content, number, size, and number of elements', () => {
    const content = [1, 2, 3];
    const pageable = new PageRequest(2, 5);
    const slice = new SliceImpl(content, pageable);

    expect(slice.content).toEqual(content);
    expect(slice.number).toBe(2);
    expect(slice.size).toBe(5);
    expect(slice.numberOfElements).toBe(3);
  });

  it('should handle empty content', () => {
    const content: number[] = [];
    const pageable = new PageRequest(0, 10);
    const slice = new SliceImpl(content, pageable);

    expect(slice.content).toEqual([]);
    expect(slice.number).toBe(0);
    expect(slice.size).toBe(10);
    expect(slice.numberOfElements).toBe(0);
  });
});
