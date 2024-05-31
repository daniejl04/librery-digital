import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
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
      throw new InternalServerErrorException()
    }

  }

  async findAll() {
    try {
      const books: Book[] = await this.bookRepository.find()
      return { mensage: 'founds',
      booksFounds: books
      }
    } catch (error) {
      throw new InternalServerErrorException()
    }
  }

 async findOne(id: string) {
    try {

      const book: Book = await this.bookRepository.findOneBy({ id: id })

      return { mensage: 'it was found', 
      booksFounds: book
      }
    } catch (error) {
      throw new NotFoundException('Book not found')
    }

  }

 async  update(id: string, updateBookDto: UpdateBookDto) {

  try {
    const book: Book = await this.bookRepository.findOneBy({ id: id })

    if (!book) {
      throw new NotFoundException('Book not found')
    }

    const bookNew = {
      id: book.id,
      name: updateBookDto.name,
      amount: updateBookDto.amount,
      price: updateBookDto.price,
      author: book.author
    }

    await this.bookRepository.save(bookNew)

    return {
      mensage: 'book updated',
      book: book
    }

  
  }catch (error) {
    throw new InternalServerErrorException()
  }

  }

 async remove(id: string) {
  
  const book: Book = await this.bookRepository.findOneBy({ id: id })

    if (!book) {
      throw new NotFoundException('Book not found')
    }

  try {
    
    await this.bookRepository.softDelete(id);

    return {
      mensage: 'book deleted successfully'
    }

  }catch (error) {
    throw new InternalServerErrorException()
  }
  }
}
