import { Component, OnInit, Host, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { NotificationsItemModel } from './notifications-item.model';

@Component({
  selector: 'notifications-item',
  templateUrl: './notifications-item.component.html',
  styleUrls: ['./notifications-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationsItemComponent implements OnInit {
  @HostBinding("class") classes = "notifications__dropdown-item border-secondary";
  @Input() item: NotificationsItemModel;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleStatus() {
    this.item.hasRead = !this.item.hasRead;
  }
  

}
