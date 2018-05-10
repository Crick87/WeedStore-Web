import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Http
import { HttpClientModule } from '@angular/common/http';

// Services
import { FirebaseCMService } from './services/firebase-cm.service';

// Routing
import { APP_ROUTING } from './app.routing';

import { AppComponent } from './app.component';
import { FcmessagingComponent } from './components/fcmessaging/fcmessaging.component';
import { TitlebarComponent } from './components/common/titlebar/titlebar.component';

@NgModule({
  declarations: [
    AppComponent,
    FcmessagingComponent,
    TitlebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    FirebaseCMService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
