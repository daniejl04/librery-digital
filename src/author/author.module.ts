import { Module } from '@nestjs/common';
import { AuthorService } from './author.service';
import { AuthorController } from './author.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { PersistanceModule } from 'src/persistance/persistance.module';

@Module({
  imports:[TypeOrmModule.forFeature([Author]), PersistanceModule],
  controllers: [AuthorController],
  providers: [AuthorService],
})
export class AuthorModule {}
