import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WebAPIService } from '../../../services/web-api.service';
import { Order } from '../../../interfaces/order.interface';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.scss']
})
export class OrderViewComponent implements OnInit {

  orderID:string
  order:Order

  constructor(
    private webAPIService:WebAPIService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {

    this.activatedRoute.params.subscribe( parametros=>{
       this.orderID=parametros['id']

       this.webAPIService.getOrder(this.orderID).subscribe(
         (data:any)=>{
           this.order = data

           this.webAPIService.getCustomer(this.order.customerId.toString()).subscribe(
             (data:any)=>{
               this.order.customerName = data.name
             },error =>{
               console.log(error)
             }
           )

         },error =>{
           console.log(error)
         }
       )

     })

  }

  ngOnInit() {
    // Scroll to top
    window.scrollTo(0, 0)
  }

}
