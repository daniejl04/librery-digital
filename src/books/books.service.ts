import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {

    constructor(
      @InjectRepository(Book)
      private readonly bookRepository : Repository<Book>){

    }
  async create(createBook: CreateBookDto) {
    try {
      await this.bookRepository.save(createBook)
      return{ mensage: 'ready, book create',

      }
    } catch (error) {
    
    }

  }

  async findAll() {
    return `This action returns all books`;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
