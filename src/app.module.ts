import { Module } from '@nestjs/common';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskListSchema } from './task-lists/task-list.schema';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    PrometheusModule.register(),
    MongooseModule.forRoot('mongodb://localhost:27017/task-list'),
    MongooseModule.forFeature([{ name: 'TaskList', schema: TaskListSchema }]),
    UsersModule,
  ],
})
export class AppModule {}
