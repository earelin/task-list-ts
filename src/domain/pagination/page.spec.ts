import { PageImpl } from './page';
import { PageRequest } from './pageable';

describe('PageImpl', () => {
  it('should return correct content, number, size, number of elements, total elements, and total pages', () => {
    const content = [1, 2, 3, 4];
    const pageable = new PageRequest(1, 4);
    const totalElements = 10;
    const page = new PageImpl(content, pageable, totalElements);

    expect(page.getContent()).toEqual(content);
    expect(page.getNumber()).toBe(1);
    expect(page.getSize()).toBe(4);
    expect(page.getNumberOfElements()).toBe(4);
    expect(page.getTotalElements()).toBe(10);
    expect(page.getTotalPages()).toBe(3);
  });

  it('should handle empty content and zero total elements', () => {
    const content: number[] = [];
    const pageable = new PageRequest(0, 5);
    const totalElements = 0;
    const page = new PageImpl(content, pageable, totalElements);

    expect(page.getContent()).toEqual([]);
    expect(page.getNumber()).toBe(0);
    expect(page.getSize()).toBe(5);
    expect(page.getNumberOfElements()).toBe(0);
    expect(page.getTotalElements()).toBe(0);
    expect(page.getTotalPages()).toBe(0);
  });
});
