import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { StoresModule } from './stores/stores.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
    StoresModule],
  controllers: [AppController],
  providers: [AppService],
})
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/nest')],
})
export class AppModule {}
