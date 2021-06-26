import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';



@Schema()
export class Book {
  @Prop({type: Number, require: true, default: 0})
  id: number;

  @Prop({type: String, require: true, default:''})
  subject: string;

  @Prop({type: String, require: true, default: ''})
  title: string;

  @Prop({type: Number, require: true, default: 0})
  price: number;

  @Prop()
  store_id: number;

}

export type BookDocument = Book & Document;

export const BookSchema = SchemaFactory.createForClass(Book);