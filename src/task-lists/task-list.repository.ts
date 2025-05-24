import { TaskList } from './task-list';
import { Page } from '../commons/pagination/page';
import { Pageable } from '../commons/pagination/pageable';

export interface TaskListRepository {
  findAll(pageable: Pageable): Promise<Page<TaskList>>;
}

export const TaskListRepository = Symbol('TaskListRepository');
