import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LAYOUT_CONFIG } from './modules/layout/services/config.service';
import { layoutConfig } from './layout-config/layout-config';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LAYOUT_CONFIG,
      useValue: layoutConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
