import { Module } from '@nestjs/common';
import { TaskListsController } from './application/rest/task-lists/task-lists.controller';
import { HealthModule } from './health.module';
import { HealthController } from './application/rest/status/health.controller';

@Module({
  imports: [HealthModule],
  controllers: [TaskListsController, HealthController],
  providers: [],
})
export class AppModule {}
