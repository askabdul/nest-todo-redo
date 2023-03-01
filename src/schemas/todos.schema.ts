import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from './users.schema';
import * as mongoose from 'mongoose';

@Schema()
export class Todo {
  @Prop()
  todo: string;

  @Prop({ default: 'pending' })
  status: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
