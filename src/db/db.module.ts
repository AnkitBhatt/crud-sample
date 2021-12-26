import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbController } from './db.controller';
import { DbService } from './db.service';
import { Product } from './product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [DbController],
  providers: [DbService],
})
export class DbModule {}
