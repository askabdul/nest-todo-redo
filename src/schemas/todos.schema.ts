import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from './users.schema';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

// export type TodoDocument = mongoose.HydratedDocument<Todo>;
// export type TodoDocument = Todo & mongoose.Document;

@Schema()
export class Todo extends Document {
  @Prop()
  todo: string;

  @Prop({ default: 'pending' })
  status: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const TodoSchema = SchemaFactory.createForClass(Todo);
