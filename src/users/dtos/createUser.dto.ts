import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  resetToken: string;

  @IsString({ each: true })
  todos: string[];
}
