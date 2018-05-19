import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { FirebaseCMService } from '../../services/firebase-cm.service';
import { Fcmessage } from '../../interfaces/fcmessage.interface';

@Component({
  selector: 'app-fcmessaging',
  templateUrl: './fcmessaging.component.html',
  styleUrls: ['./fcmessaging.component.scss']
})
export class FcmessagingComponent implements OnInit {

  keyTokenTo:string = "ftDgroQ1KRU:APA91bHpdVykVhzu6u9zRvjFCtBkVI_TWTcNwPLac17RvdAg1Vq4KWe5kKYMGIVyHYx32r_63X7_lFEflHowMUqCepF-38PezG7rAZx5vEGBt9gdSyYMG0fS6TtvKwWuzcVEnfe8g73K"
  forma:FormGroup
  resButton:string = "Enviar"

  constructor(
    private firebaseCMService:FirebaseCMService
  ) {

    this.forma = new FormGroup({
      'title': new FormControl('', [ Validators.required ]),
      'body': new FormControl('', [ Validators.required ])
    })

  }

  ngOnInit() {
    // Scroll to top
    window.scrollTo(0, 0)
  }

  send(){
    this.resButton = "Enviando"

    var message:Fcmessage={
      to:this.keyTokenTo,
      collapse_key:'type_a',
      notification:{
        body:this.forma.value.body,
        title:this.forma.value.title
      }
    }

    this.firebaseCMService.sendPush(message).subscribe(
      (data:any)=>{
        console.log(data)
        this.resButton = "Enviar"
        if ( data.success == 1 ){
          //TODO: Enviado con exito
          console.log("ok")
        }else{
          //TODO: Error al enviar
          console.log("no")
        }
      },
      error =>{
        console.log(error)
        this.resButton = "Enviar"
        //TODO: Error al enviar
      }
    )

  }

}
