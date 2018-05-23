import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.scss']
})
export class TitlebarComponent implements OnInit {

  userID:number

  constructor(
    private router:Router
  ) {
    if( localStorage.getItem('lastUser') ){
      var user = JSON.parse(localStorage.getItem('lastUser'))
      this.userID = user.id
    }
  }

  ngOnInit() {
  }

  logout(){
    localStorage.setItem('lastUser', JSON.stringify(""))
    this.router.navigate(['/login'])
  }

}
