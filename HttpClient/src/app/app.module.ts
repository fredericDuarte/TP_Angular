import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {GithubApiService} from './services/github-api.service';

import {AppComponent} from './app.component';
import {HeadersService} from './services/headers.service';
import {InterceptorService} from './services/interceptor.service';
import {InterceptorErrorService} from './services/interceptor-error.service';
import {ParamsService} from './services/params.service';


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
    HeadersService,
    ParamsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorErrorService,
      multi: true
    }


  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
