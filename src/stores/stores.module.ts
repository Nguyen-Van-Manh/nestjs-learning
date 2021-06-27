import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { BooksModule } from 'src/books/books.module';
import { BooksService } from 'src/books/books.service';
import { StoresController } from './stores.controller';
import { StoresService } from './stores.service';
@Module({
  imports: [BooksModule, AuthModule],
  controllers: [StoresController],
  providers: [StoresService],
})
export class StoresModule { }
