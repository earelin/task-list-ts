import { TaskList } from './task-list';
import { Page } from './pagination/page';
import { Pageable } from './pagination/pageable';

export interface TaskListRepository {
  findAll(pageable: Pageable): Promise<Page<TaskList>>;
}

export const TaskListRepository = Symbol('TaskListRepository');
