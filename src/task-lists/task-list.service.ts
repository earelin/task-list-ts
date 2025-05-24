import { Inject, Injectable } from '@nestjs/common';
import { TaskListRepository } from './task-list.repository';
import { Pageable } from '../commons/pagination/pageable';

@Injectable()
export class TaskListService {
  readonly #repository: TaskListRepository;

  constructor(@Inject(TaskListRepository) repository: TaskListRepository) {
    this.#repository = repository;
  }

  findAll(pageable: Pageable) {
    return this.#repository.findAll(pageable);
  }
}
