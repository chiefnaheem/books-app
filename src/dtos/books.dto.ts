import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class PostBooksDto {
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

export class UpdateBooksDto {
    @IsString()
    @IsOptional()
    title!: string;

    @IsString()
    @IsOptional()
    author!: string;

    @IsString()
    @IsOptional()
    genre!: string;
}