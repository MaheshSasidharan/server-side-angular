import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { LOCAL_STORAGE } from "./service/localStorageProvider";

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
  ],
  providers: [{ provide: LOCAL_STORAGE, useValue: { getItem() {} } }],
  bootstrap: [AppComponent]
})
export class AppServerModule { }
