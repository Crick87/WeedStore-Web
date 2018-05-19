import { Component, OnInit } from '@angular/core';
import { WebAPIService } from '../../../services/web-api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

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
  }

}
