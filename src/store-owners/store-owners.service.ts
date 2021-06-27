import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { StoreOwner, StoreOwnerDocument } from 'src/Entities/storeOwner.entity';
import { Model } from 'mongoose';
@Injectable()
export class StoreOwnersService {
    constructor(@InjectModel(StoreOwner.name) private storeOwnerModel: Model<StoreOwnerDocument> ){}
    public async findAll(): Promise<StoreOwner[]>{
        return this.storeOwnerModel.find();
    }
    public async findOne(id: String): Promise<StoreOwner>{
        return this.storeOwnerModel.findOne({_id: id});
    }
    public async findByName(username: String): Promise<StoreOwner>{
        return this.storeOwnerModel.findOne({username:username});
    }
    public async createNewOwner(username: String, password:String, store_id:Number): Promise<StoreOwnerDocument>{
        const user = new this.storeOwnerModel({
            username: username,
            password: password,
            store_id: store_id
        });
        return user.save();
    }
}
