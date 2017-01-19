import { BrowserModule }            from '@angular/platform-browser';
import { NgModule }                 from '@angular/core';
import { FormsModule }              from '@angular/forms';
import { HttpModule, JsonpModule }  from '@angular/http';

import { AppComponent }             from './app.component';
import { EmitterService }           from './emitter.service';

import { UsersModule }              from './users/users.module';

import { AppRoutingModule }         from './app-routing.module';
import { PageNotFoundComponent }    from './not-found.component';

@NgModule({
  declarations: [
      AppComponent,
      PageNotFoundComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      JsonpModule,
      UsersModule,
      AppRoutingModule
  ],
  providers: [
      EmitterService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
