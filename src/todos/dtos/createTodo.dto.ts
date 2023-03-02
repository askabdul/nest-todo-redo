import { IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  todo: string;

  @IsString()
  status: string;

  @IsString()
  user: string;
}
