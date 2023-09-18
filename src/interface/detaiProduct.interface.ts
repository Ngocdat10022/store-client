interface IDescription {
  Color?: string;
  Material?: string;
  Name?: string;
  Pattern?: string;
  Size?: string;
  Size_L?: string;
  Size_M?: string;
  Size_XL?: string;
}

export interface IdetailProduct {
  ImageProduct: [];
  created_at: string;
  deleted_at: string;
  description: IDescription[];
  discount_percentage: string;
  discounted_price: string;
  id: string;
  imageUrl: string;
  initial_price: string;
  name: string;
  rate: string;
  size: ["M", "L", "XL"];
  slug: string;
  status: null;
  updated_at: string;
}
