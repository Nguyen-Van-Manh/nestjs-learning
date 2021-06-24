import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { Book, BookDocument } from 'src/Entities/book.entity';
import { InjectModel } from '@nestjs/mongoose';
import { BookDto } from './book.dto';
@Injectable()
export class BooksService {
    constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) { }
    public async getAllBooks(store_id: number): Promise<any> {
        const result = this.bookModel.find().exec();
        return result;
    }
    public async getBookByName(title: string): Promise<any> {
        const result = this.bookModel.findOne({ title: title })
        return result;
    }
    public async getBookById(book_id: number): Promise<any> {
        const result = this.bookModel.findOne({ id: book_id });
        return result;
    }
    public async editBookPrice(book_id: number, book_price: number) {
        const result = this.bookModel.findOneAndUpdate({ id: book_id }, { price: book_price }, { new: true });
        return result;
    }
    public async deleteBook(book_id: number) {
        return this.bookModel.deleteOne({id: book_id });

    }
    public async addBook(bookDto: BookDto): Promise<any> {
        const book = new this.bookModel(bookDto);
        return book.save();
    }
}
