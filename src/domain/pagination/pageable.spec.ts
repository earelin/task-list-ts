import { PageRequest } from './pageable';
import { Sort } from './sort';

describe('PageRequest', () => {
  it('should return correct page number and size', () => {
    const page = new PageRequest(2, 20);
    expect(page.pageNumber).toBe(2);
    expect(page.pageSize).toBe(20);
  });

  it('should calculate offset correctly', () => {
    const page = new PageRequest(3, 10);
    expect(page.offset).toBe(30);
  });

  it('should return first page', () => {
    const page = new PageRequest(5, 15);
    const first = page.first();
    expect(first.pageNumber).toBe(0);
    expect(first.pageSize).toBe(15);
  });

  it('should return next page', () => {
    const page = new PageRequest(1, 25);
    const next = page.next();
    expect(next.pageNumber).toBe(2);
    expect(next.pageSize).toBe(25);
  });

  it('should use unsorted sort by default', () => {
    const page = new PageRequest(0, 10);
    expect(page.sort).toEqual(Sort.unsorted());
  });

  it('should use provided sort', () => {
    const sort = new Sort([]);
    const page = new PageRequest(0, 10, sort);
    expect(page.sort).toBe(sort);
  });
});
