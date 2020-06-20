import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import { NavVerticalItemComponent } from './vertical/item/item.component';
import { NavVerticalCollapsableComponent } from './vertical/collapsable/collapsable.component';
import { NavVerticalGroupComponent } from './vertical/group/group.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    NavigationComponent
  ],
  declarations: [
    NavigationComponent,
    NavVerticalGroupComponent,
    NavVerticalItemComponent,
    NavVerticalCollapsableComponent,
  ]
})
export class NavigationModule {
}
