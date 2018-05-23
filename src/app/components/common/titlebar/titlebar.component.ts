import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Config } from '../../../config';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent implements OnInit {

  auth = Config.auth
  admin = Config.admin
  route = ""
  userID:number

  constructor(
    private router:Router,
    private location: Location
  ) {
    //Prevent no auth access
    if(!this.auth){
      this.router.navigate(['/login'])
    }

    if( localStorage.getItem('lastUser') ){
      var user = JSON.parse(localStorage.getItem('lastUser'))
      this.userID = user.id
    }

    // Scroll to fragments
    router.events.subscribe((val) => {
      this.route = location.path()
      this.admin = Config.admin
    });
  }

  ngOnInit() {
  }

  logout(){
    localStorage.setItem('lastUser', JSON.stringify(""))
    this.router.navigate(['/login'])
  }

}
