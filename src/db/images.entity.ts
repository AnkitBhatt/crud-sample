import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Product } from "./product.entity";
import Variants from "./variants.entity";

@Entity('Images')
export class Images{
  @PrimaryColumn()
  id:number;

  @ManyToOne(() => Product, product => product.images, {onDelete: 'CASCADE'})
  product: Product;

  @Column({nullable:true})
  position: number;

  @Column({ type:'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type:'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Column({nullable:true})
  alt: string;

  @Column({nullable:true})
  width: number;

  @Column({nullable:true})
  height: number;

  @Column({nullable:true})
  src: string;

  @OneToMany(() => Variants, variants => variants.images)
  variants:Variants[];

  @Column({nullable:true})
  admin_graphql_api_id: string;
}