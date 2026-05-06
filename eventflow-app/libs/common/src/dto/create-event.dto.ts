import {
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateEventDto {
  @IsString({ message: 'Title must be a string' })
  @IsNotEmpty({ message: 'Title is required' })
  @MaxLength(255, { message: 'Title must be at most 255 characters' })
  title!: string;

  @IsString({ message: 'Description must be a string' })
  @IsOptional()
  description!: string;

  @IsDateString({}, { message: 'Date must be a valid ISO 8601 date string' })
  @IsNotEmpty({ message: 'Date is required' })
  date!: string;

  @IsString({ message: 'Location must be a string' })
  @IsNotEmpty({ message: 'Location is required' })
  @MaxLength(255, { message: 'Location must be at most 255 characters' })
  location!: string;

  @IsInt({ message: 'Capacity must be an integer' })
  @IsNotEmpty({ message: 'Capacity is required' })
  @Min(1, { message: 'Capacity must be a positive integer' })
  capacity!: number;

  @IsInt({ message: 'Price must be an integer' })
  @Min(0, { message: 'Price must be a non-negative integer' })
  @IsOptional()
  price!: number;
}
