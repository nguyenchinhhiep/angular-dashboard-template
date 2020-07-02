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
  @HostBinding("class") classes = "notifications__item border-secondary";
  @Input() item: NotificationsItemModel;
  @Output() onRemove = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleStatus() {
    this.item.hasRead = !this.item.hasRead;
  }

  remove() {
    this.onRemove.emit(this.item);
  }
  

}
