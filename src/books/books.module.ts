import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { PersistanceModule } from 'src/persistance/persistance.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Author } from 'src/author/entities/author.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Author]),
    PersistanceModule],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
