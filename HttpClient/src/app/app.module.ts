import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { GithubApiService } from "./services/github-api.service";

import { AppComponent } from './app.component';
import { HeadersService } from "./services/headers.service";



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    GithubApiService,


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
