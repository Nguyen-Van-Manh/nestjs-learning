import { Post, Body, Controller, Get, Param, Query, Delete, ParseIntPipe, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BookDto } from 'src/books/book.dto';
import { BooksService } from 'src/books/books.service';
import { Book, BookDocument } from 'src/Entities/book.entity';

@Controller('stores')
@ApiTags('Books')
export class StoresController {
    constructor(private booksService: BooksService, private authService: AuthService) { }
    @UseGuards(JwtAuthGuard)
    @ApiOperation({description:'Lấy tất cả các sách của cửa hàng theo store_id'})
    @ApiResponse({ type: [Book] ,description: 'danh sách các sách' })
    @ApiParam({
        type: Number,
        name: 'store_id',
        description: 'Nhập id của cửa hàng muốn lấy list các sách',
      })
    @Get(':store_id')
    async getAllBooks(@Param('store_id', new ParseIntPipe()) store_id): Promise<BookDocument[]> {
        return this.booksService.getAllBooks(store_id);
    }
    @UseGuards(JwtAuthGuard)
    @ApiOperation({description:'Thêm sách'})
    @Post('add-book')
    async addBook(@Body() bookDto: BookDto): Promise<BookDocument> {
        return await this.booksService.addBook(bookDto);
    }
    @UseGuards(JwtAuthGuard)
    @ApiOperation({description:'Xóa sách'})
    @Delete('delete-book/:book_id')
    async deleteBook(@Param('book_id') book_id) {
        return await this.booksService.deleteBook(book_id);
    }
    @UseGuards(JwtAuthGuard)
    @ApiOperation({description:'Thay đổi giá tiền của sách'})
    @Post('edit-book-price')
    async deleteBookName(@Body('book_id') book_id, @Body('book_price') book_price): Promise<BookDocument> {
        return await this.booksService.editBookPrice(book_id, book_price);
    }
}
