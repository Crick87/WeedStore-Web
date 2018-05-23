import { Product } from './product.interface';
export interface Order {
  orderId:number,
  customerId:number,
  customerName?:string,
  status:boolean,
  productList:Product[],
  orderDate:any
}
