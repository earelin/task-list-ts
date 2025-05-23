import { Module } from '@nestjs/common';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { TaskListService } from './domain/task-list.service';
import { TaskListRepository } from './domain/task-list.repository';
import { TaskListMongoRepository } from './infrastructure/mongo/task-list.repository';
import { HealthController } from './application/rest/status/health.controller';
import { TaskListsController } from './application/rest/task-lists/task-lists.controller';
import { TasksController } from './application/rest/tasks/tasks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskListSchema } from './infrastructure/mongo/task-list.schema';

@Module({
  controllers: [HealthController, TaskListsController, TasksController],
  imports: [
    PrometheusModule.register(),
    MongooseModule.forRoot('mongodb://localhost:27017/task-list'),
    MongooseModule.forFeature([{ name: 'TaskList', schema: TaskListSchema }]),
  ],
  providers: [
    TaskListService,
    {
      provide: TaskListRepository,
      useClass: TaskListMongoRepository,
    },
  ],
})
export class AppModule {}
