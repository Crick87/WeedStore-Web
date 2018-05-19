import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { Customer } from '../interfaces/customer.interface';

@Injectable()
export class WebAPIService {

  serverURL:string = "http://localhost:8080/ventas/api/"
  customersURL:string = this.serverURL+"customers"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  ['application/json']
    })
  }

  constructor( private http:HttpClient ) { }

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
    let headers:HttpHeaders = new HttpHeaders({
      'Content-Type':'application/json'
    })
    return this.http.put( this.customersURL, body, {headers:headers} )
    .pipe(
      map(res => res)
    )
  }

  createCustomer( customer:Customer ){
    let body:string = JSON.stringify(customer)
    let headers:HttpHeaders = new HttpHeaders({
      'Content-Type':'application/json'
    })
    return this.http.post( this.customersURL, body, {headers:headers} )
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

}
