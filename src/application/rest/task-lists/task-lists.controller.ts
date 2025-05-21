import { Controller, Get } from '@nestjs/common';
import { TaskListRepository } from '../../../domain/task-list-repository';
import { TaskList } from '../../../domain/task-list';
import { Page } from '../../../domain/pagination/page';

@Controller('task-lists')
export class TaskListsController {
  readonly #repository: TaskListRepository;

  @Get()
  findAll(): Page<TaskList> {
    return this.#repository.findAll();
  }
}
