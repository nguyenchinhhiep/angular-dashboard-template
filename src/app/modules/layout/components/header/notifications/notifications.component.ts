import { Component, OnInit, ViewEncapsulation, HostBinding, TemplateRef } from '@angular/core';
import { NotificationsItemModel } from './notifications-item/notifications-item.model';
import { PopoverService } from 'src/app/shared/components/popover/popover.service';
import { NotificationsService } from './notifications.service';

@Component({
  selector: 'notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationsComponent implements OnInit {

  @HostBinding("class") classes = "notifications-container";
  isOpen = false;
  notificationsList: Array<NotificationsItemModel>;

  constructor(private _popoverService: PopoverService, private _notificationService: NotificationsService) {
  }

  ngOnInit(): void {
    this._notificationService.getNotifications().subscribe((res: NotificationsItemModel[]) => {
      this.notificationsList = res;
    })
  }

  open(origin, content: TemplateRef<any>) {
    const ref = this._popoverService.open<any>({
      content,
      origin,
    });

    ref.afterClosed$.subscribe(res => {
      console.log(res);
    })

  }

  newestNotificationList() {
    return this.notificationsList.sort((a, b) => {
      return (<any>a.hasRead == <any>b.hasRead) ? 0 : <any>a.hasRead ? 1 : -1;
    })
  }

  itemHasRemove(event: NotificationsItemModel) {
    this._notificationService.remove(event);
  }
}
