import { RouterModule, Routes } from '@angular/router';
import { FcmessagingComponent } from './components/fcmessaging/fcmessaging.component';

const app_routes: Routes = [
  { path: 'push-notify', component: FcmessagingComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'push-notify' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
