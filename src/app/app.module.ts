import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Http
import { HttpClientModule } from '@angular/common/http';

// Routing
import { APP_ROUTING } from './app.routing';

import { AppComponent } from './app.component';
import { FcmessagingComponent } from './components/fcmessaging/fcmessaging.component';

@NgModule({
  declarations: [
    AppComponent,
    FcmessagingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
