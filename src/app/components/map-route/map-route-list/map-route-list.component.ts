import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WebAPIService } from '../../../services/web-api.service';

@Component({
  selector: 'app-map-route-list',
  templateUrl: './map-route-list.component.html',
  styleUrls: ['./map-route-list.component.scss']
})
export class MapRouteListComponent implements OnInit {

  routes=[]
  routesFixed=[]
  userID:string

  constructor(
    private webAPIService:WebAPIService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) {

    this.activatedRoute.params.subscribe( parametros=>{
       this.userID=parametros['id']

       this.webAPIService.getRoutes(this.userID).subscribe(
         (data:any)=>{
           this.routes = data
           this.routesFixed = this.filterRoutes(data)
         },
         error =>{
           console.log(error)
         }
       )

     })

  }

  ngOnInit() {
    // Scroll to top
    window.scrollTo(0, 0)
  }

  filterRoutes( routes:any ){
    var routesList:any = []
    var idRoute = 0;
    var noItems = 0;
    for( var i=0; i<routes.length; i++ ){
      if ( i == 0 )
          idRoute = routes[i].idRoute
      if( idRoute == routes[i].idRoute )
          noItems++;
      if( idRoute != routes[i].idRoute || (i+1)==routes.length ){
          var route = {
            idRoute:idRoute,
            noItems:noItems
          }
          routesList.push(route)
          idRoute = routes[i].idRoute
          noItems = 1
      }
    }
    return routesList
  }

}
