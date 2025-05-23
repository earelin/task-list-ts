import { Controller, Get, Query } from '@nestjs/common';
import { TaskList } from '../../../domain/task-list';
import { Page } from '../../../domain/pagination/page';
import { PageRequest } from '../../../domain/pagination/pageable';
import { TaskListService } from '../../../domain/task-list.service';

@Controller('task-lists')
export class TaskListsController {
  readonly #service: TaskListService;

  constructor(service: TaskListService) {
    this.#service = service;
  }

  @Get()
  findAll(
    @Query('page') page: number = 1,
    @Query('size') size: number = 10,
  ): Promise<Page<TaskList>> {
    const pageable = new PageRequest(page, size);
    return this.#service.findAll(pageable);
  }
}
