import { Module } from '@nestjs/common';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskListSchema } from './infrastructure/mongodb/task-list.schema';
import { ApplicationModule } from './application/application.module';

@Module({
  imports: [
    PrometheusModule.register(),
    MongooseModule.forRoot('mongodb://localhost:27017/task-list'),
    MongooseModule.forFeature([{ name: 'TaskList', schema: TaskListSchema }]),
    ApplicationModule,
  ],
})
export class AppModule {}
