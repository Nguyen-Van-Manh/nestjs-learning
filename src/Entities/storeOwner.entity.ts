import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, SchemaType } from "mongoose";

@Schema()
export class StoreOwner {
    @Prop()
    username: String;
    @Prop()
    password: String;
    @Prop()
    store_id: Number;
}
export type StoreOwnerDocument = StoreOwner & Document;
export const StoreOwnerSchema = SchemaFactory.createForClass(StoreOwner);

