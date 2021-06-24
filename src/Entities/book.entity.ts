import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';



@Schema()
export class Book {
  @Prop()
  id: number;

  @Prop()
  subject: string;

  @Prop()
  title: string;

  @Prop()
  price: number;

  @Prop()
  store_id: number;

}

export type BookDocument = Book & Document;

export const BookSchema = SchemaFactory.createForClass(Book);