import { Sort, SortOrder, SortDirection } from './sort';

describe('SortOrder', () => {
  it('should return correct direction and property', () => {
    const order = new SortOrder(SortDirection.ASC, 'name');
    expect(order.direction).toBe(SortDirection.ASC);
    expect(order.property).toBe('name');
  });

  it('should handle DESC direction', () => {
    const order = new SortOrder(SortDirection.DESC, 'createdAt');
    expect(order.direction).toBe(SortDirection.DESC);
    expect(order.property).toBe('createdAt');
  });
});

describe('Sort', () => {
  it('should return correct orders', () => {
    const orders = [
      new SortOrder(SortDirection.ASC, 'name'),
      new SortOrder(SortDirection.DESC, 'createdAt'),
    ];
    const sort = new Sort(orders);
    expect(sort.orders).toEqual(orders);
  });

  it('should handle empty orders', () => {
    const sort = new Sort([]);
    expect(sort.orders).toEqual([]);
  });
});
