import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ROUTES} from './app.routes';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserResolvers } from './user-resolvers/user-resolvers.';
import { PageComponent } from './page/page.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from "@angular/common/http";
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    MatTabsModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [UserResolvers],
  bootstrap: [AppComponent]
})
export class AppModule { }
