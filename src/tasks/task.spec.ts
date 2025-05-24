import { Task } from './task';

describe('Task', () => {
  it('should return the correct id', () => {
    const task = new Task(42);
    expect(task.id).toBe(42);
  });
});
