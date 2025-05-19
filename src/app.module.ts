import { Module } from '@nestjs/common';
import { TaskListsController } from './application/rest/task-lists/task-lists.controller';

@Module({
  imports: [],
  controllers: [TaskListsController],
  providers: [],
})
export class AppModule {}
