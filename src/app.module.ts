import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StoresModule } from './stores/stores.module';
import { AuthModule } from './auth/auth.module';
import { StoreOwnersModule } from './store-owners/store-owners.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    StoresModule,
    AuthModule,
    StoreOwnersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
