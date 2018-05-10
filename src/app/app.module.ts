import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Http
import { HttpClientModule } from '@angular/common/http';

// Services
import { FirebaseCMService } from './services/firebase-cm.service';
import { WebAPIService } from './services/web-api.service';

// Routing
import { APP_ROUTING } from './app.routing';

import { AppComponent } from './app.component';
import { FcmessagingComponent } from './components/fcmessaging/fcmessaging.component';
import { TitlebarComponent } from './components/common/titlebar/titlebar.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FcmessagingComponent,
    TitlebarComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    FirebaseCMService,
    WebAPIService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
