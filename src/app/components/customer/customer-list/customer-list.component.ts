import { Component, OnInit } from '@angular/core';
import { WebAPIService } from '../../../services/web-api.service';
import { Config } from '../../../config';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  admin = Config.admin
  customers = []

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
