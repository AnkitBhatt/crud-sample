import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Product } from './product.entity';
import { ProductPost } from './product.interface';

@Injectable()
export class DbService {
  constructor (
    @InjectRepository(Product)
    private readonly productRepository:Repository<Product>
  ) 
  {}

  createProduct(productpost: ProductPost): Observable<ProductPost>{
    return from(this.productRepository.save(productpost));
  }

  findAllProducts(): Observable<ProductPost[]> {
    return from(this.productRepository.find());
  }

  findOneProduct(id:number): Observable<ProductPost>{
    return from(this.productRepository.findOne(id));
  }

  updateProduct(id:number, productPost:ProductPost): Observable<UpdateResult>{
    return from(this.productRepository.update(id, productPost));
  }

  deleteProduct(id:number): Observable<DeleteResult>{
    return from(this.productRepository.delete(id));
  }
}
