import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { WebAPIService } from '../../../services/web-api.service';
import { Order } from '../../../interfaces/order.interface';
import { Product } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.component.html',
  styleUrls: ['./order-edit.component.scss']
})
export class OrderEditComponent implements OnInit {

  orderID:string
  order:any
  orderStatus:boolean
  products:Product[]
  customers=[]
  customerID:number
  forma:FormGroup
  resButton:string = "Guardar"
  title:string = "Crear orden"

  constructor(
    private webAPIService:WebAPIService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {

    this.webAPIService.getProducts().subscribe(
      (data:any)=>{
        this.products = data
        this.fillProductForm(data)
        this.forma.setValue({ productList:this.products })
      },
      error =>{
        console.log(error)
      }
    )

    this.webAPIService.getCustomers().subscribe(
      (data:any)=>{
        this.customers = data
      },
      error =>{
        console.log(error)
      }
    )

    this.activatedRoute.params.subscribe( parametros=>{
       this.orderID=parametros['id']
       if ( this.orderID != "nuevo" ){
         this.webAPIService.getOrder(this.orderID).subscribe(
           (data:any)=>{
             this.order = data

             this.customerID = data.customerId
             this.orderStatus = data.status
             this.setQuantity(data)

             this.webAPIService.getCustomer(this.customerID.toString()).subscribe(
               (data:any)=>{
                 this.title = "Editar orden de "+data.name
               },error =>{
                 console.log(error)
               }
             )

           },
           error =>{
             console.log(error)
           }
         )
       }else{
         //TODO: New order = ... ?
       }
     })

     this.forma = new FormGroup({
      'productList' : new FormArray([
        new FormGroup(
          {
            'id': new FormControl('', [ Validators.required ]),
            'name': new FormControl('', [ Validators.required ]),
            'description': new FormControl('', [ Validators.required ]),
            'price': new FormControl('', [ Validators.required ]),
            'stock': new FormControl('', [ Validators.required ]),
            'image': new FormControl(''),
            'quantity': new FormControl('', [ Validators.required ])
          }
        )
      ])
     })

  }

  get formProducts():FormArray { return <FormArray>this.forma.get('productList'); }

  lessQuantity( item:number ){
    var value = this.formProducts.controls[item].get('quantity').value;
    if( value > 0 )
      this.formProducts.controls[item].get('quantity').setValue(
        value -1
      )
  }

  moreQuantity( item:number ){
    var value = this.formProducts.controls[item].get('quantity').value;
    if( value < this.products[item].stock )
      this.formProducts.controls[item].get('quantity').setValue(
        value +1
      )
  }

  setQuantity( basket:any ){
    for (var i=0; i<basket.productList.length; i++){
      for (var j=0; j<this.products.length; j++){
        if ( this.products[j].id == basket.productList[i].id ){
          this.formProducts.controls[j].get('quantity').setValue(
            basket.productList[i].quantity
          )
        }
      }
    }
  }

  fillProductForm( items:any ){
    for (var i=0; i<items.length-1; i++){
      (<FormArray>this.forma.controls['productList']).push(
        new FormGroup(
          {
            'id': new FormControl('', [ Validators.required ]),
            'name': new FormControl('', [ Validators.required ]),
            'description': new FormControl('', [ Validators.required ]),
            'price': new FormControl('', [ Validators.required ]),
            'stock': new FormControl('', [ Validators.required ]),
            'image': new FormControl(''),
            'quantity': new FormControl('', [ Validators.required ])
          }
        )
      )
    }
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

  send(){
    this.resButton = "Guardando"

    var productListForm = this.formProducts.value;
    var basket = []
    for (var i=0; i<productListForm.length; i++){
      if ( productListForm[i].quantity !== 0 ){
        basket.push(productListForm[i])
      }
    }
    this.order = {
      orderId:0,
      status:false,
      customerId:this.customerID,
      productList:basket
    }

    if( this.orderID == "nuevo"){
      this.webAPIService.createOrder(this.order).subscribe(
        (data:any)=>{
          this.resButton = "Guardar"

          //TODO: Guardado con exito
          console.log("Orden creada")
          this.router.navigate(['/orders'])
        },
        error =>{
          console.log(error)
          this.resButton = "Guardar"
          //TODO: Error al guardar
        }
      )
    }else{
      this.order.customerId=this.customerID
      this.order.status=this.orderStatus
      this.order.orderId=this.orderID

      this.webAPIService.updateOrder(this.order).subscribe(
        (data:any)=>{
          //console.log(data)
          this.resButton = "Guardar"
          //TODO: Actualizado con exito
          console.log("Orden actualizada")
          this.router.navigate(['/order', this.orderID])
        },
        error =>{
          console.log(error)
          this.resButton = "Guardar"
          //TODO: Error al actualizar
        }
      )
    }
  }

  deleteOrder(){
    this.webAPIService.deleteOrder(this.order.id).subscribe(
      (data:any)=>{
        //TODO: Eliminado con exito
        console.log("Orden eliminada")
        this.router.navigate(['/orders'])
      },
      error =>{
        console.log(error)
        //TODO: Error al eliminar
      }
    )
  }

}
