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
  order:Order
  products:Product[]
  productsBasket:any
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
        console.log(this.products)
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
             //TODO: set values to forma
             this.title = "Editar orden de "+this.order.customerName
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
       //
     })

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
    console.log("Push push push")
    // this.resButton = "Guardando"
    //
    // var customer:Customer = this.customer
    // customer.name = this.forma.controls.name.value
    // customer.email = this.forma.controls.email.value
    // customer.phone = this.forma.controls.phone.value
    //
    // if( this.customerID == "nuevo"){
    //   this.webAPIService.createCustomer(customer).subscribe(
    //     (data:any)=>{
    //       this.resButton = "Guardar"
    //
    //       //TODO: Guardado con exito
    //       console.log("Cliente creado")
    //       this.router.navigate(['/customers'])
    //     },
    //     error =>{
    //       console.log(error)
    //       this.resButton = "Guardar"
    //       //TODO: Error al guardar
    //     }
    //   )
    // }else{
    //   this.webAPIService.updateCustomer(customer).subscribe(
    //     (data:any)=>{
    //       //console.log(data)
    //       this.resButton = "Guardar"
    //       //TODO: Actualizado con exito
    //       console.log("Cliente actualizado")
    //       this.router.navigate(['/customer', data.id])
    //     },
    //     error =>{
    //       console.log(error)
    //       this.resButton = "Guardar"
    //       //TODO: Error al actualizar
    //     }
    //   )
    // }
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
