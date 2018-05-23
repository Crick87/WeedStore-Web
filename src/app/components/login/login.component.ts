import { Component, OnInit } from '@angular/core';
import { WebAPIService } from '../../services/web-api.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user.interface';
import { Config } from "../../config";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email:string = "crick@mail.com"
  password:string = "lorem"
  user:User

  constructor(
    private webAPIService:WebAPIService,
    private router:Router
  ) {

    this.getLastUser()
    this.webAPIService.testUser(this.user).subscribe(
      (data:any)=>{
        this.activeGuard( data )
      },
      error =>{
        //console.log(error)
      }
    )

  }

  ngOnInit() {
  }

  login(){
    var loginRequest = {
      username: this.email,
      password: this.password
    }
    this.webAPIService.login(loginRequest).subscribe(
      (data:any)=>{
        this.user = data
        localStorage.setItem('lastUser', JSON.stringify(this.user))
        this.activeGuard( data )
      },
      error =>{
        console.log(error)
      }
    )
  }

  getLastUser(){
    if( localStorage.getItem('lastUser') ){
      this.user = JSON.parse(localStorage.getItem('lastUser'))
    }
  }

  activeGuard( user ){
    Config.auth = true
    Config.admin = user.admin
    this.router.navigate(['/customers'])
  }

}
