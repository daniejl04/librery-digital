import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";
import { Author } from "src/author/entities/author.entity";

export class CreateBookDto {

    @IsNumber()
    @ApiProperty()
    id: string;

    @IsString()
    @ApiProperty()
    name: string;

    @IsNumber()
    @ApiProperty()
    amount: number;

    @IsNumber()
    @ApiProperty()
    price: number;

    @IsString()
    @ApiProperty()
    author: Author;
}
