import { Module } from '@nestjs/common';
import { TaskListsController } from './task-lists/task-lists.controller';
import { HealthController } from './status/health.controller';
import { TasksController } from './tasks/tasks.controller';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  controllers: [TaskListsController, HealthController, TasksController],
  imports: [TerminusModule],
})
export class RestModule {}
