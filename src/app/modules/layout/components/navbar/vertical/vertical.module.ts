import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { NavbarVerticalComponent } from './vertical.component';

@NgModule({
  declarations: [NavbarVerticalComponent],
  imports: [SharedModule],
  exports: [NavbarVerticalComponent]
})
export class NavbarVerticalModule {}