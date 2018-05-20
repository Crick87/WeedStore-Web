import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WebAPIService } from '../../../services/web-api.service';

@Component({
  selector: 'app-map-route-view',
  templateUrl: './map-route-view.component.html',
  styleUrls: ['./map-route-view.component.scss']
})
export class MapRouteViewComponent implements OnInit {

  title: string
  lat: number = 20.5231405;
  lng: number = -100.7943641;
  zoom: number = 12;
  userID: string
  routeID: string
  routes=[]

  constructor(
    private webAPIService:WebAPIService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {

    this.activatedRoute.params.subscribe( parametros=>{
       this.userID=parametros['id']
       this.routeID=parametros['idRoute']

       this.webAPIService.getRoutes(this.userID).subscribe(
         (data:any)=>{
           this.routes = this.filterRoutes(data)
         },
         error =>{
           console.log(error)
         }
       )

    })

    this.title = "Ruta "+this.routeID
  }

  filterRoutes( routes:any[] ){
    var markers=[]
    for( var i=0; i<routes.length; i++ ){
      if( routes[i].idRoute == this.routeID ){
        markers.push(routes[i])
        this.lat = routes[i].latLong.x
        this.lng = routes[i].latLong.y
      }
    }
    return markers
  }

  ngOnInit() {
      // Scroll to top
      window.scrollTo(0, 0)
  }

}
