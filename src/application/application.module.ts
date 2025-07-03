import { Module } from '@nestjs/common';
import { HealthController } from './rest/health.controller';
import { TaskListsController } from './rest/task-lists.controller';
import { DomainModule } from '../domain/domain.module';

@Module({
  controllers: [HealthController, TaskListsController],
  imports: [DomainModule],
})
export class ApplicationModule {}
