import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Fcmessage } from '../interfaces/fcmessage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class FirebaseCMService {

  serverKey:string = "AAAAz_Y0v48:APA91bF5a8VfzG9VY7PNBSM4p3C58lgwDO_wpIQ3zDvwCVa3P08xil3cgBzjAwzVkSBcOYF1wjhx9bxbcrnPSiWsDJXvYu6BKnpKq-cVBTevtO7MQW1NJjlxBaLVn1knShtFj51u01bB"
  serverURL:string = "https://fcm.googleapis.com/fcm"
  sendPush_URL:string = this.serverURL+"/send"

  constructor( private http:HttpClient ) { }

  sendPush( message:Fcmessage ){
    let body:string = JSON.stringify(message)
    let headers:HttpHeaders = new HttpHeaders({
      'Content-Type':'application/json',
      'Authorization':'key='+this.serverKey
    })

    return this.http.post( this.sendPush_URL, body, {headers:headers} )
    .pipe(
      map(res => res)
    )

  }

}
