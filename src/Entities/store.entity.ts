import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';



@Schema()
export class Store {
  @Prop()
  id: number;

  @Prop()
  store_name: string;

  @Prop()
  address: string;

}

export const StoreSchema = SchemaFactory.createForClass(Store);
export type StoreDocument = Store & Document;