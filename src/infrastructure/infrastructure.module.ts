import { Module } from '@nestjs/common';
import { TaskListRepository } from '../domain/task-list.repository';
import { TaskListSchema } from './mongodb/task-list.schema';

@Module({
  exports: [
    {
      provide: TaskListRepository,
      useValue: TaskListSchema,
    },
  ],
  providers: [
    {
      provide: TaskListRepository,
      useValue: TaskListSchema,
    },
  ],
})
export class InfrastructureModule {}
