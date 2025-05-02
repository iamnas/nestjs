import { IsNumber, IsString, Length } from 'class-validator';

export class CreatePropertyDto {
  @IsString()
  @Length(2, 10, { message: 'Name is too short or too long' })
  name: string;
  @IsString()
  description: string;
  @IsNumber()
  price: number;
}
