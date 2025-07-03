import { PageImpl } from './page';
import { PageRequest } from './pageable';

describe('PageImpl', () => {
  it('should return correct content, number, size, number of elements, total elements, and total pages', () => {
    const content = [1, 2, 3, 4];
    const pageable = new PageRequest(1, 4);
    const totalElements = 10;
    const page = new PageImpl(content, pageable, totalElements);

    expect(page.content).toEqual(content);
    expect(page.number).toBe(1);
    expect(page.size).toBe(4);
    expect(page.numberOfElements).toBe(4);
    expect(page.totalElements).toBe(10);
    expect(page.totalPages).toBe(3);
  });

  it('should handle empty content and zero total elements', () => {
    const content: number[] = [];
    const pageable = new PageRequest(0, 5);
    const totalElements = 0;
    const page = new PageImpl(content, pageable, totalElements);

    expect(page.content).toEqual([]);
    expect(page.number).toBe(0);
    expect(page.size).toBe(5);
    expect(page.numberOfElements).toBe(0);
    expect(page.totalElements).toBe(0);
    expect(page.totalPages).toBe(0);
  });
});
