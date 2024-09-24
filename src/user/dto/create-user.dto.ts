import { IsEmail, IsNotEmpty, IsPhoneNumber, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Name k duoc de trong' })
  @MinLength(3, { message: 'Name phai nhieu hon 3 ki tu' })
  name: string;

  @IsEmail({}, { message: 'Email k dung dinh dang' })
  @IsNotEmpty({ message: 'Email k duoc de trong' })
  email: string;

  @IsNotEmpty()
  password: string;
}
