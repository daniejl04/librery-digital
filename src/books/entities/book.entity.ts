import { Author } from "src/author/entities/author.entity";
import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class Book {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    amount: number;
    
    @Column()
    price: number;

    @ManyToOne(() => Author, (author) => author.books)
    author: Author
}
