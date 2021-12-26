import { Images } from "./images.entity";
import { Options } from "./options.entity";
import Variants from "./variants.entity";

export interface ProductPost{
  id?: number;

  title?: string;

  body_html?: string;

  vendor?: string;

  product_type?: string;

  created_at?: Date;

  handle?: string;

  updated_at?: Date;

  published_at?: Date;

  template_suffix?: string;

  published_scope?: string;

  tags?: string;

  admin_graphql_api_id?: string;

  variants?: Variants[];

  options?: Options[];

  images?: Images[];

  // image?: string;
}