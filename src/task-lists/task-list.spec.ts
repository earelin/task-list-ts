import { TaskList } from './task-list';
import { Task } from '../tasks/task';

describe('TaskList', () => {
  const id = 'list-1';
  const name = 'My Tasks';
  const description = 'Test description';
  let taskList: TaskList;

  beforeEach(() => {
    taskList = new TaskList(id, name, description);
  });

  it('should return the correct id, name, and description', () => {
    expect(taskList.id).toBe(id);
    expect(taskList.name).toBe(name);
    expect(taskList.description).toBe(description);
  });

  it('should set name and description', () => {
    taskList.name = 'New Name';
    taskList.description = 'New Desc';
    expect(taskList.name).toBe('New Name');
    expect(taskList.description).toBe('New Desc');
  });

  it('should add a task', () => {
    const task = new Task(1);
    taskList.addTask(task);
    expect(taskList.tasks).toContain(task);
  });

  it('should not add duplicate tasks', () => {
    const task = new Task(2);
    taskList.addTask(task);
    expect(() => taskList.addTask(task)).toThrow(
      'Task already exists in the task list',
    );
  });

  it('should remove a task', () => {
    const task = new Task(3);
    taskList.addTask(task);
    taskList.removeTask(task);
    expect(taskList.tasks).not.toContain(task);
  });

  it('should throw when removing a non-existent task', () => {
    const task = new Task(4);
    expect(() => taskList.removeTask(task)).toThrow(
      'Task not found in the task list',
    );
  });

  it('should update a task', () => {
    const task = new Task(5);
    taskList.addTask(task);
    const updatedTask = new Task(5);
    taskList.updateTask(updatedTask);
    expect(taskList.tasks.find((t) => t.id === 5)).toBe(updatedTask);
  });

  it('should throw when updating a non-existent task', () => {
    const task = new Task(6);
    expect(() => taskList.updateTask(task)).toThrow(
      'Task not found in the task list',
    );
  });

  it('should initialize with tasks if provided', () => {
    const taskA = new Task(7);
    const taskB = new Task(8);
    const list = new TaskList('id', 'n', 'd', [taskA, taskB]);
    expect(list.tasks).toEqual([taskA, taskB]);
  });
});
