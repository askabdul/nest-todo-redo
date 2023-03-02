import { Injectable, NotFoundException } from '@nestjs/common';
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
    return createTodo.save();
  }

  findAll() {
    return this.todoModel.find().exec();
  }

  async findOne(id: string) {
    const todo = await this.todoModel.findOne({ _id: id }).exec();

    if (!todo) {
      throw new NotFoundException(`Todo Item with ${id} not found`);
    }

    return todo;
  }

  async remove(id: string) {
    const deletedTodo = await this.todoModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deletedTodo;
  }
}
