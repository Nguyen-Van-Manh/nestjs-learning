import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { BookSchema, Book } from 'src/Entities/book.entity';
@Module({
  imports: [MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }])],
  controllers: [BooksController],
  providers: [BooksService],
  exports: [BooksService],
})
export class BooksModule {}
