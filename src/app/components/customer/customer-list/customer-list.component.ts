import { Component, OnInit } from '@angular/core';
import { WebAPIService } from '../../../services/web-api.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers=[]

  constructor(
    private webAPIService:WebAPIService
  ) {

    this.webAPIService.getCustomers().subscribe(
      (data:any)=>{
        this.customers = data
      },
      error =>{
        console.log(error)
      }
    )

  }

  ngOnInit() {
    // Scroll to top
    window.scrollTo(0, 0)
  }

}
