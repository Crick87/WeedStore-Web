import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { Customer } from '../interfaces/customer.interface';
import { Product } from '../interfaces/product.interface';
import { Order } from '../interfaces/order.interface';

@Injectable()
export class WebAPIService {

  serverURL:string = "http://localhost:8080/ventas/api/"
  //TODO: set a unhacked token on login
  token:string = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJlbGNyaXN0aWFuIiwiZXhwIjoxNTMxMTQzNzI1LCJ1c2VyaWQiOjF9.69yydCtwqC7hdhWrEIE4acAnDky_BL6_H53DC9SrWPo"
  customersURL:string = this.serverURL+"customers"
  productsURL:string = this.serverURL+"products"
  usersURL:string = this.serverURL+"users"
  ordersURL:string = this.serverURL+"orders"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  ['application/json'],
      'Authorization': 'Bearer '+this.token
    })
  }

  constructor( private http:HttpClient ) { }

  ////////////////
  // Customers  //
  ////////////////

  getCustomers(){
    return this.http.get( this.customersURL, this.httpOptions )
    .pipe(
      map(res => res)
    )
  }

  getCustomer( id:string ){
    return this.http.get( this.customersURL+"/"+id, this.httpOptions )
    .pipe(
      map(res => res)
    )
  }

  updateCustomer( customer:Customer ){
    let body:string = JSON.stringify(customer)
    return this.http.put( this.customersURL, body, this.httpOptions )
    .pipe(
      map(res => res)
    )
  }

  createCustomer( customer:Customer ){
    let body:string = JSON.stringify(customer)
    return this.http.post( this.customersURL, body, this.httpOptions )
    .pipe(
      map(res => res)
    )
  }

  deleteCustomer( id:number ){
    return this.http.delete( this.customersURL+"/"+id, this.httpOptions )
    .pipe(
      map(res => res)
    )
  }

  //////////////
  // Products //
  //////////////

  getProducts(){
    return this.http.get( this.productsURL, this.httpOptions )
    .pipe(
      map(res => res)
    )
  }

  getProduct( id:string ){
    return this.http.get( this.productsURL+"/"+id, this.httpOptions )
    .pipe(
      map(res => res)
    )
  }

  updateProduct( product:Product ){
    let body:string = JSON.stringify(product)
    return this.http.put( this.productsURL, body, this.httpOptions )
    .pipe(
      map(res => res)
    )
  }

  createProduct( product:Product ){
    let body:string = JSON.stringify(product)
    return this.http.post( this.productsURL, body, this.httpOptions )
    .pipe(
      map(res => res)
    )
  }

  deleteProduct( id:number ){
    return this.http.delete( this.productsURL+"/"+id, this.httpOptions )
    .pipe(
      map(res => res)
    )
  }

  /////////////////
  // Map Routes  //
  /////////////////

  getRoutes( id:string ){
    return this.http.get( this.usersURL+"/routes/"+id, this.httpOptions )
    .pipe(
      map(res => res)
    )
  }

  /////////////
  // Orders  //
  /////////////

  getOrders(){
    return this.http.get( this.ordersURL, this.httpOptions )
    .pipe(
      map(res => res)
    )
  }

  getOrder( id:string ){
    return this.http.get( this.ordersURL+"/"+id, this.httpOptions )
    .pipe(
      map(res => res)
    )
  }

  updateOrder( order:Order ){
    let body:string = JSON.stringify(order)
    return this.http.put( this.ordersURL, body, this.httpOptions )
    .pipe(
      map(res => res)
    )
  }

  createOrder( order:Order ){
    let body:string = JSON.stringify(order)
    return this.http.post( this.ordersURL, body, this.httpOptions )
    .pipe(
      map(res => res)
    )
  }

  deleteOrder( id:number ){
    return this.http.delete( this.ordersURL+"/"+id, this.httpOptions )
    .pipe(
      map(res => res)
    )
  }

}
