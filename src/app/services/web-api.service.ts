import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { Customer } from '../interfaces/customer.interface';
import { Product } from '../interfaces/product.interface';

@Injectable()
export class WebAPIService {

  serverURL:string = "http://localhost:8080/ventas/api/"
  customersURL:string = this.serverURL+"customers"
  productsURL:string = this.serverURL+"products"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  ['application/json']
    })
  }

  constructor( private http:HttpClient ) { }

  ////////////////
  // Customers  //
  ////////////////

  getCustomers(){
    return this.http.get( this.customersURL )
    .pipe(
      map(res => res)
    )
  }

  getCustomer( id:string ){
    return this.http.get( this.customersURL+"/"+id )
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
    return this.http.delete( this.customersURL+"/"+id )
    .pipe(
      map(res => res)
    )
  }

  //////////////
  // Products //
  //////////////

  getProducts(){
    return this.http.get( this.productsURL )
    .pipe(
      map(res => res)
    )
  }

  getProduct( id:string ){
    return this.http.get( this.productsURL+"/"+id )
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
    return this.http.delete( this.productsURL+"/"+id )
    .pipe(
      map(res => res)
    )
  }

}
