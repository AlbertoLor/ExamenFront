import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { Tarjeta1Component } from './components/tarjeta1/tarjeta1.component';
import { Tarjeta2Component } from './components/tarjeta2/tarjeta2.component';
import { Tarjeta3Component } from './components/tarjeta3/tarjeta3.component';
import { Tarjeta4Component } from './components/tarjeta4/tarjeta4.component';
import { Vista1Component } from './components/vista1/vista1.component';
import { Vista2Component } from './components/vista2/vista2.component';

@NgModule({
  declarations: [
    AppComponent,
    Tarjeta1Component,
    Tarjeta2Component,
    Tarjeta3Component,
    Tarjeta4Component,
    Vista1Component,
    Vista2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
