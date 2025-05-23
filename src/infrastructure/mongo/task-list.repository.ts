import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskListRepository } from '../../domain/task-list.repository';
import { Page, PageImpl } from 'src/domain/pagination/page';
import { TaskList } from 'src/domain/task-list';
import { Pageable } from '../../domain/pagination/pageable';

@Injectable()
export class TaskListMongoRepository implements TaskListRepository {
  readonly #taskListModel: Model<TaskList>;

  constructor(@InjectModel('TaskList') taskListModel: Model<TaskList>) {
    this.#taskListModel = taskListModel;
  }

  async findAll(pageable: Pageable): Promise<Page<TaskList>> {
    const taskList = await this.#taskListModel
      .find()
      .skip((pageable.pageNumber - 1) * pageable.pageSize)
      .limit(pageable.pageSize);
    return new PageImpl(taskList, pageable, taskList.length);
  }
}
