import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { NavbarVerticalModule } from './vertical/vertical.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [NavbarComponent],
  imports: [SharedModule, NavbarVerticalModule],
  exports: [NavbarComponent]
})
export class NavbarModule {

}