import { Controller } from '@nestjs/common';
import { BooksService } from './books.service';
import { Get, Param } from '@nestjs/common';
@Controller('books')
export class BooksController {
     constructor (private booksService: BooksService){}

    @Get(':store_id')
    async getAllBooks(@Param('store_id') store_id): Promise<any>{
        return this.booksService.getAllBooks(store_id);
    }
}
