import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { WebAPIService } from '../../../services/web-api.service';
import { Product } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  productID:string
  product:Product
  forma:FormGroup
  resButton:string = "Guardar"
  title:string = "Crear producto"

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
             this.forma.setValue({
               name:this.product.name,
               description:this.product.description,
               price:this.product.price
             })
             this.title = "Editar a '"+this.product.name+"'"
           },
           error =>{
             console.log(error)
           }
         )
       }else{
         this.product = {
           id:0,
           name:"",
           description:"",
           price:0
         }
       }
     })

    this.forma = new FormGroup({
      'name': new FormControl('', [ Validators.required ]),
      'description': new FormControl('', [ Validators.required ]),
      'price': new FormControl('', [ Validators.required ])
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
    this.resButton = "Guardando"

    var product:Product = this.product
    product.name = this.forma.controls.name.value
    product.description = this.forma.controls.description.value
    product.price = this.forma.controls.price.value

    if( this.productID == "nuevo"){
      this.webAPIService.createProduct(product).subscribe(
        (data:any)=>{
          this.resButton = "Guardar"

          //TODO: Guardado con exito
          console.log("Producto creado")
          this.router.navigate(['/products'])
        },
        error =>{
          console.log(error)
          this.resButton = "Guardar"
          //TODO: Error al guardar
        }
      )
    }else{
      this.webAPIService.updateProduct(product).subscribe(
        (data:any)=>{
          //console.log(data)
          this.resButton = "Guardar"
          //TODO: Actualizado con exito
          console.log("Producto actualizado")
          this.router.navigate(['/product', data.id])
        },
        error =>{
          console.log(error)
          this.resButton = "Guardar"
          //TODO: Error al actualizar
        }
      )
    }
  }

  deleteProduct(){
    this.webAPIService.deleteProduct(this.product.id).subscribe(
      (data:any)=>{
        //TODO: Eliminado con exito
        console.log("Producto eliminado")
        this.router.navigate(['/products'])
      },
      error =>{
        console.log(error)
        //TODO: Error al eliminar
      }
    )
  }

}
