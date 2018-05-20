import { Product } from './product.interface';
export interface Order {
  id:number,
  customerId:number,
  customerName?:string,
  status:boolean,
  productList:Product,
  orderDate:any
}
