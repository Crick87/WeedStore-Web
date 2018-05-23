import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FcmessagingComponent } from './components/fcmessaging/fcmessaging.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerViewComponent } from './components/customer/customer-view/customer-view.component';
import { CustomerEditComponent } from './components/customer/customer-edit/customer-edit.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductViewComponent } from './components/product/product-view/product-view.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { MapRouteListComponent } from './components/map-route/map-route-list/map-route-list.component';
import { MapRouteViewComponent } from './components/map-route/map-route-view/map-route-view.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { OrderViewComponent } from './components/order/order-view/order-view.component';
import { OrderEditComponent } from './components/order/order-edit/order-edit.component';

const app_routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'customers', component: CustomerListComponent },
  { path: 'customer/:id', component: CustomerViewComponent },
  { path: 'customer/edit/:id', component: CustomerEditComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'product/:id', component: ProductViewComponent },
  { path: 'product/edit/:id', component: ProductEditComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'order/:id', component: OrderViewComponent },
  { path: 'order/edit/:id', component: OrderEditComponent },
  { path: 'routes/:id', component: MapRouteListComponent },
  { path: 'routes/:id/:idRoute', component: MapRouteViewComponent },
  { path: 'push-notify', component: FcmessagingComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
