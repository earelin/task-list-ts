import { TaskList } from './task-list';
import { Page } from './pagination/page';

export interface TaskListRepository {
  findAll(): Page<TaskList>;
}
