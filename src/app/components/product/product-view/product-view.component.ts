import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WebAPIService } from '../../../services/web-api.service';
import { Product } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  productID:string
  product:Product

  constructor(
    private webAPIService:WebAPIService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {

    this.activatedRoute.params.subscribe( parametros=>{
       this.productID=parametros['id']
       if ( this.productID != "nuevo" ){
         this.webAPIService.getProduct(this.productID).subscribe(
           (data:any)=>{
             this.product = data
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
