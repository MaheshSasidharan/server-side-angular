import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { LOCAL_STORAGE } from "./service/localStorageProvider";
import { HomeComponent } from './home/home.component';

import { JwtInterceptor } from './helper/jwt.interceptor';
import { LoaderInterceptor } from './helper/loader.interceptor';

const getLocalStorage = () => {
  return (typeof window !== "undefined") ? window.localStorage : null;
}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [
    { provide: LOCAL_STORAGE, useFactory: getLocalStorage },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
