/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { Images } from './images.entity';
import { Options } from './options.entity';
import Variants from './variants.entity';

@Entity('Product')
export class Product {
  @PrimaryColumn()
  id: number;

  @Column({nullable:true})
  title: string;

  @Column({nullable:true})
  body_html: string;

  @Column({nullable:true})
  vendor: string;

  @Column({nullable:true})
  product_type: string;

  @Column({ type:'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({nullable:true})
  handle: string;

  @Column({ type:'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @Column({ type:'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  published_at: Date;

  @Column({nullable:true})
  template_suffix: string;

  @Column({nullable:true})
  published_scope: string;

  @Column({nullable:true})
  tags: string;

  @Column({nullable:true})
  admin_graphql_api_id: string;

  @OneToMany(() => Variants, variants => variants.product)
  variants:Variants[];

  @OneToMany(() => Options, options => options.product)
  options:Options[];

  @OneToMany(() => Images, images => images.product)
  images:Images[];

  // @Column({nullable:true})
  // image: string;
}
