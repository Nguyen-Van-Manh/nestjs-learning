import { Post, Body, Controller, Get, Param, Query, Delete } from '@nestjs/common';
import { BookDto } from 'src/books/book.dto';
import { BooksService } from 'src/books/books.service';

@Controller('stores')
export class StoresController {
    constructor (private booksService: BooksService){}
    @Get(':store_id')
    async getAllBooks(@Param('store_id') store_id): Promise<any>{
        return this.booksService.getAllBooks(store_id);
    }
    @Post('add-book')
    async addBook(@Body() bookDto: BookDto){
        return await this.booksService.addBook(bookDto);
    }
    @Delete('delete-book/:book_id')
    async deleteBook(@Param('book_id') book_id){
        return await this.booksService.deleteBook(book_id);
    }
    @Post('edit-book-price')
    async deleteBookName(@Body('book_id') book_id, @Body('book_price') book_price){
        return await this.booksService.editBookPrice(book_id, book_price);
    }
}
