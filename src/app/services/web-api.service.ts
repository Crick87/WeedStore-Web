import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class WebAPIService {

  serverURL:string = "http://localhost:8080/ventas/api/"
  customersURL:string = this.serverURL+"customers"

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

}
