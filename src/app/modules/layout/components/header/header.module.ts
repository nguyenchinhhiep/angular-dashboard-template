import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

import { HeaderComponent } from './header.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [HeaderComponent, UserProfileComponent],
  imports: [MatButtonModule, MatMenuModule],
  exports: [HeaderComponent]
})
export class HeaderModule { }