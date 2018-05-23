import { Product } from './product.interface';
export interface Order {
  orderId:number,
  employeeId?:number,
  customerId:number,
  customerName?:string,
  status:boolean,
  productList:Product[],
  orderdate:any
}
