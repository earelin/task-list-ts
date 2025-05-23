import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskListRepository } from '../../domain/task-list.repository';
import { Page } from 'src/domain/pagination/page';
import { TaskList } from 'src/domain/task-list';

@Injectable()
export class TaskListMongoRepository implements TaskListRepository {
  readonly #taskListModel: Model<TaskList>;

  constructor(
    @InjectModel('TaskList') taskListModel: Model<TaskList>,
  ) {
    this.#taskListModel = taskListModel;
  }

  async findAll(): Promise<Page<TaskList>> {
    return Promise.reject<Page<TaskList>>(new Error('Method not implemented.'));
  }
}
