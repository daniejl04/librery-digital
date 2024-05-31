import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { PersistanceModule } from './persistance/persistance.module';
import { AuthorModule } from './author/author.module';
import { SalesModule } from './sales/sales.module';

@Module({
  imports: [BooksModule, PersistanceModule, AuthorModule, SalesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
