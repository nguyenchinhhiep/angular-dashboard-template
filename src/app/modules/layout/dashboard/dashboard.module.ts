import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderModule } from '../components/header/header.module';
import { SidebarModule } from '../components/sidebar/sidebar.module';
import { NavbarModule } from '../components/navbar/navbar.module';
import { FooterModule } from '../components/footer/footer.module';

import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [DashboardComponent],
  imports: [HeaderModule, SidebarModule, NavbarModule, FooterModule, SharedModule, DashboardRoutingModule],
  exports: []
})
export class DashboardModule {

}