import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';


//cambiar el locale de la aplicacion
import localeDE from '@angular/common/locales/de'
import localeESCO from '@angular/common/locales/es-CO'
import localeJA from '@angular/common/locales/ja'
import localeKO from '@angular/common/locales/ko'
import {registerLocaleData } from '@angular/common'
registerLocaleData(localeESCO);
registerLocaleData(localeDE);
registerLocaleData(localeJA);
registerLocaleData(localeKO);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouterModule,
    BrowserAnimationsModule,
    BrowserModule,
    PrimeNgModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue :'es-CO'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
