import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';

import { JwtInterceptor } from './helper/jwt.interceptor';
import { LoaderInterceptor } from './helper/loader.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCAL_STORAGE } from "./service/localStorageProvider";

import { MaterialModule } from './material.module';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { LandingComponent } from './landing/landing.component';

const getLocalStorage = () => {
  return (typeof window !== "undefined") ? window.localStorage : null;
}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent,
    HomeComponent,
    UserListComponent,
    NavigationComponent,
    LandingComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    { provide: LOCAL_STORAGE, useFactory: getLocalStorage },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
