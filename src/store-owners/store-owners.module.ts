import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreOwnerSchema } from 'src/Entities/storeOwner.entity';
import { StoreOwnersService } from './store-owners.service';
import { StoreOwner } from 'src/Entities/storeOwner.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: StoreOwner.name, schema: StoreOwnerSchema }])],
  providers: [StoreOwnersService],
  exports:[StoreOwnersService]
})
export class StoreOwnersModule {}
