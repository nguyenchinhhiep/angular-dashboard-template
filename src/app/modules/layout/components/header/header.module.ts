import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './header.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SearchComponent } from './search/search.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatDividerModule } from '@angular/material/divider';
import { NotificationsItemComponent } from './notifications/notifications-item/notifications-item.component';

@NgModule({
  declarations: [HeaderComponent, UserProfileComponent, NotificationsComponent, SearchComponent, LanguageSelectorComponent, NotificationsItemComponent],
  imports: [MatButtonModule, MatMenuModule, MatIconModule, OverlayModule, MatDividerModule, SharedModule],
  exports: [HeaderComponent]
})
export class HeaderModule { }