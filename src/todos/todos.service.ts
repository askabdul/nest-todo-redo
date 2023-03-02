import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from 'src/schemas/todos.schema';
import { CreateTodoDto } from './dtos/createTodo.dto';

@Injectable()
export class TodosService {
  constructor(
    @InjectModel(Todo.name) private readonly todoModel: Model<Todo>,
  ) {}

  async create(createTodoDto: CreateTodoDto) {
    const createTodo = new this.todoModel(createTodoDto);

    return createTodo;
  }

//   findAll() {
//     this.todoModel.fi
//   }
}
