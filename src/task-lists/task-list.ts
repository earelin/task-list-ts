import { Task } from '../tasks/task';

export class TaskList {
  readonly #id: string;
  name: string;
  description: string;
  readonly #tasks: Task[];

  constructor(id: string, name: string, description: string, tasks?: Task[]) {
    this.#id = id;
    this.name = name;
    this.description = description;
    this.#tasks = tasks || [];
  }

  get id(): string {
    return this.#id;
  }

  get tasks(): Task[] {
    return [...this.#tasks];
  }

  addTask(task: Task): void {
    if (this.#containsTask(task)) {
      throw new Error('Task already exists in the task list');
    }
    this.#tasks.push(task);
  }

  removeTask(task: Task): void {
    const index = this.#tasks.findIndex((t) => t.id === task.id);
    if (index === -1) {
      throw new Error('Task not found in the task list');
    }
    this.#tasks.splice(index, 1);
  }

  updateTask(task: Task): void {
    const index = this.#tasks.findIndex((t) => t.id === task.id);
    if (index === -1) {
      throw new Error('Task not found in the task list');
    }
    this.#tasks[index] = task;
  }

  #containsTask(task: Task): boolean {
    return this.#tasks.some((t) => t.id === task.id);
  }
}
