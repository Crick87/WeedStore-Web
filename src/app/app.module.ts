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
import { CustomerViewComponent } from './components/customer/customer-view/customer-view.component';
import { CustomerEditComponent } from './components/customer/customer-edit/customer-edit.component';
import { ProductEditComponent } from './components/product/product-edit/product-edit.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductViewComponent } from './components/product/product-view/product-view.component';

@NgModule({
  declarations: [
    AppComponent,
    FcmessagingComponent,
    TitlebarComponent,
    CustomerListComponent,
    CustomerViewComponent,
    CustomerEditComponent,
    ProductEditComponent,
    ProductListComponent,
    ProductViewComponent
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
