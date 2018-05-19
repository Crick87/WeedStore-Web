import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { WebAPIService } from '../../../services/web-api.service';
import { Customer } from '../../../interfaces/customer.interface';
import { Latlong } from '../../../interfaces/latlong.interface';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  customerID:string
  customer:Customer
  forma:FormGroup
  resButton:string = "Guardar"
  title:string = "Crear cliente"

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
             this.forma.setValue({
               name:this.customer.name,
               email:this.customer.email,
               phone:this.customer.phone
             })
             this.title = "Editar a "+this.customer.name
           },
           error =>{
             console.log(error)
           }
         )
       }else{
         this.customer = {
           id:0,
           name:"",
           phone:"",
           email:"",
           latlong:{
           'x' : 0,
           'y' : 0,
           'type' : 'point',
           'value' : '(0,0)'
           }
         }
       }
     })

    this.forma = new FormGroup({
      'name': new FormControl('', [ Validators.required ]),
      'email': new FormControl('', [ Validators.required ]),
      'phone': new FormControl('', [ Validators.required ])
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

    var customer:Customer = this.customer
    customer.name = this.forma.controls.name.value
    customer.email = this.forma.controls.email.value
    customer.phone = this.forma.controls.phone.value

    if( this.customerID == "nuevo"){
      this.webAPIService.createCustomer(customer).subscribe(
        (data:any)=>{
          this.resButton = "Guardar"

          //TODO: Guardado con exito
          console.log("Cliente creado")
          this.router.navigate(['/customers'])
        },
        error =>{
          console.log(error)
          this.resButton = "Guardar"
          //TODO: Error al guardar
        }
      )
    }else{
      this.webAPIService.updateCustomer(customer).subscribe(
        (data:any)=>{
          //console.log(data)
          this.resButton = "Guardar"
          //TODO: Actualizado con exito
          console.log("Cliente actualizado")
          this.router.navigate(['/customer', data.id])
        },
        error =>{
          console.log(error)
          this.resButton = "Guardar"
          //TODO: Error al actualizar
        }
      )
    }
  }

  deleteCustomer(){
    this.webAPIService.deleteCustomer(this.customer.id).subscribe(
      (data:any)=>{
        //TODO: Eliminado con exito
        console.log("Cliente eliminado")
        this.router.navigate(['/customers'])
      },
      error =>{
        console.log(error)
        //TODO: Error al eliminar
      }
    )
  }

}
