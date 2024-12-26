import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpRequestComponent } from './http-request/http-request.component';
import { LifecycleHookComponent } from './lifecycle-hook/lifecycle-hook.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    HttpRequestComponent,
    LifecycleHookComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
