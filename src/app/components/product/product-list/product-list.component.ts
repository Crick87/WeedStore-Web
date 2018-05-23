import { Component, OnInit } from '@angular/core';
import { WebAPIService } from '../../../services/web-api.service';
import { Config } from '../../../config';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  admin = Config.admin
  products=[]

  constructor(
    private webAPIService:WebAPIService
  ) {

    this.webAPIService.getProducts().subscribe(
      (data:any)=>{
        this.products = data
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
