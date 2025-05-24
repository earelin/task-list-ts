import { Controller, Get, Query } from '@nestjs/common';
import { TaskList } from './task-list';
import { Page } from '../commons/pagination/page';
import { PageRequest } from '../commons/pagination/pageable';
import { TaskListService } from './task-list.service';

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
