import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class TaskList {
  @Prop()
  name: string;
}

export const TaskListSchema = SchemaFactory.createForClass(TaskList);
