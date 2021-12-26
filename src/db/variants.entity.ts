import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Images } from "./images.entity";
import { Product } from "./product.entity";

@Entity('Variants')
export default class Variants{
  @PrimaryColumn()
  id:number;

  @ManyToOne(() => Product, product => product.variants, {onDelete: 'CASCADE'})
  product: Product;

  @Column({nullable:true})
  title:string;

  @Column({nullable:true})
  price:string;

  @Column({nullable:true})
  sku:string;

  @Column({nullable:true})
  position:number;

  @Column({nullable:true})
  inventory_policy:string;

  @Column({nullable:true})
  compare_at_price:string;

  @Column({nullable:true})
  fulfillment_service:string;

  @Column({nullable:true})
  inventory_management:string;

  @Column({nullable:true})
  option1:string;

  @Column({nullable:true})
  option2:string;

  @Column({nullable:true})
  option3:string;

  @Column({ type:'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at:Date;

  @Column({ type:'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at:Date;

  @Column({nullable:true})
  taxable:boolean;

  @Column({nullable:true})
  barcode:string;

  @Column({nullable:true})
  grams:number;

  @ManyToOne(() => Images,  images => images.variants, {onDelete: 'CASCADE'})
  images: Images;

  @Column({nullable:true})
  weight:number;

  @Column({nullable:true})
  weight_unit:string;

  @Column({nullable:true})
  inventory_item_id:number;

  @Column({nullable:true})
  inventory_quantity:number;

  @Column({nullable:true})
  old_inventory_quantity:number;

  @Column({nullable:true})
  requires_shipping:boolean;

  @Column({nullable:true})
  admin_graphql_api_id:string;
}