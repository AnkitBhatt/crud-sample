import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { DbService } from './db.service';
import { ProductPost } from './product.interface';

@Controller('db')
export class DbController {
  constructor(private dbservice: DbService) {}

  @Post()
  create(@Body() productpost: ProductPost): Observable<ProductPost> {
    return this.dbservice.createProduct(productpost);
  }

  @Get()
  findAll(): Observable<ProductPost[]> {
    return this.dbservice.findAllProducts();
  }

  @Patch(':id')
  findOne(
    @Param('id') id:number
  ): Observable<ProductPost>{
    return this.dbservice.findOneProduct(id);
  }

  @Put(':id')
  update(
      @Param('id') id: number,
      @Body() productpost: ProductPost
    ): Observable<UpdateResult> {
    return this.dbservice.updateProduct(id, productpost);
  }

  @Delete(':id')
  delete(
    @Param('id') id: number
  ): Observable<DeleteResult>{
    return this.dbservice.deleteProduct(id);
  }
}
