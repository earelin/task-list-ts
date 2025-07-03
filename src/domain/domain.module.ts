import { Module } from '@nestjs/common';
import { TaskListService } from './task-list.service';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';

@Module({
  imports: [InfrastructureModule],
  providers: [TaskListService],
  exports: [TaskListService],
})
export class DomainModule {}
