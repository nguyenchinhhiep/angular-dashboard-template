import { Component, OnInit, Host, HostBinding, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { NotificationsItemModel } from './notifications-item.model';
import { NotificationsService } from '../notifications.service';

@Component({
  selector: 'notifications-item',
  templateUrl: './notifications-item.component.html',
  styleUrls: ['./notifications-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationsItemComponent implements OnInit {
  @HostBinding("class") classes = "notifications__item border-secondary background-hover";
  @Input() item: NotificationsItemModel;
  
  constructor(
    private _notificationService: NotificationsService
  ) { }

  ngOnInit(): void {
  }

  toggleStatus() {
    this.item.isRead = !this.item.isRead;
  }

  remove() {
    this._notificationService.remove(this.item);
  }
  

}
