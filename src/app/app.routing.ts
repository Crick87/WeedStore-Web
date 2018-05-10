import { RouterModule, Routes } from '@angular/router';
import { FcmessagingComponent } from './components/fcmessaging/fcmessaging.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';

const app_routes: Routes = [
  { path: 'customers', component: CustomerListComponent },
  { path: 'push-notify', component: FcmessagingComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'customers' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
