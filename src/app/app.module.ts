import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { LAYOUT_CONFIG } from './modules/layout/services/config.service';
import { config } from './theme';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LAYOUT_CONFIG,
      useValue: config
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
