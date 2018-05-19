import { RouterModule, Routes } from '@angular/router';
import { FcmessagingComponent } from './components/fcmessaging/fcmessaging.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerViewComponent } from './components/customer/customer-view/customer-view.component';
import { CustomerEditComponent } from './components/customer/customer-edit/customer-edit.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductViewComponent } from './components/product/product-view/product-view.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { MapRouteListComponent } from './components/map-route/map-route-list/map-route-list.component';
import { MapRouteViewComponent } from './components/map-route/map-route-view/map-route-view.component';

const app_routes: Routes = [
  { path: 'customers', component: CustomerListComponent },
  { path: 'customer/:id', component: CustomerViewComponent },
  { path: 'customer/edit/:id', component: CustomerEditComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductViewComponent },
  { path: 'product/edit/:id', component: ProductEditComponent },
  { path: 'routes/:id', component: MapRouteListComponent },
  { path: 'routes/:id/:idRoute', component: MapRouteViewComponent },
  { path: 'push-notify', component: FcmessagingComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'customers' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
