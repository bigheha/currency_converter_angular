import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CurrenciesWindowComponent } from './currencies-window/currencies-window.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CurrenciesWindowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
