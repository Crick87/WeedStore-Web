import { RouterModule, Routes } from '@angular/router';
import { FcmessagingComponent } from './components/fcmessaging/fcmessaging.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CustomerViewComponent } from './components/customer/customer-view/customer-view.component';

const app_routes: Routes = [
  { path: 'customers', component: CustomerListComponent },
  { path: 'customer/:id', component: CustomerViewComponent },
  { path: 'push-notify', component: FcmessagingComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'customers' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
