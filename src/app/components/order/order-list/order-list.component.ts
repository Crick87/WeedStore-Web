import { Component, OnInit } from '@angular/core';
import { WebAPIService } from '../../../services/web-api.service';
import { Order } from '../../../interfaces/order.interface';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders=[]

  constructor(
    private webAPIService:WebAPIService
  ) {

    this.webAPIService.getOrders().subscribe(
      (data:any)=>{
        this.orders = data

        this.webAPIService.getCustomers().subscribe(
          (customersData:any)=>{
            this.orders = this.matchOrders(this.orders, customersData)
          },
          error =>{
            console.log(error)
          }
        )

      },
      error =>{
        console.log(error)
      }
    )

  }

  matchOrders( orders:Order[], data:any[] ){
    for (let order of orders) {
      for (let customer of data){
        if (customer.id == order.customerId)
          order.customerName = customer.name
      }
    }
    return orders
  }

  ngOnInit() {
    // Scroll to top
    window.scrollTo(0, 0)
    // Reload mainScripts
    this.reloadScripts()
  }

  reloadScripts(){
    // Reload mainScripts
    document.getElementById("custom-js").remove();
    var custom = document.createElement("script");
    custom.setAttribute("id", "custom-js");
    custom.setAttribute("src", "assets/local/custom.js");
    document.body.appendChild(custom);
  }

}
