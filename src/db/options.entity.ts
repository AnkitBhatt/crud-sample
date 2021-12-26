import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity('Options')
export class Options{
  @PrimaryColumn()
  id:number;

  @ManyToOne(() => Product, product => product.options, {onDelete: 'CASCADE'})
  product: Product;

  @Column({nullable:true})
  name:string;

  @Column({nullable:true})
  positions:number;

  // @Column({nullable:true})
  // values: Array<string>;
}