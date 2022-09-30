import { IsString, IsNotEmpty } from 'class-validator';

export class BooksDto {
    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsString()
    @IsNotEmpty()
    author!: string;

    @IsString()
    @IsNotEmpty()
    genre!: string;
}