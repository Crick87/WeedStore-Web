import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WebAPIService } from '../../../services/web-api.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent implements OnInit {

  customerID:string
  customer:any

  constructor(
    private webAPIService:WebAPIService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {

    this.activatedRoute.params.subscribe( parametros=>{
       this.customerID=parametros['id']
       if ( this.customerID != "nuevo" ){
         this.webAPIService.getCustomer(this.customerID).subscribe(
           (data:any)=>{
             this.customer = data
           },
           error =>{
             console.log(error)
           }
         )
       }
     })

  }

  ngOnInit() {
    // Scroll to top
    window.scrollTo(0, 0)
  }

}
