import { Component, OnInit, ViewEncapsulation, HostBinding, TemplateRef } from '@angular/core';
import { NotificationsItemModel } from './notifications-item/notifications-item.model';
import { PopoverService } from 'src/app/shared/components/popover/popover.service';

@Component({
  selector: 'notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NotificationsComponent implements OnInit {

  @HostBinding("class") classes = "notifications";
  isOpen = false;
  notificationsList: Array<NotificationsItemModel>;

  constructor(private _popoverService: PopoverService) {
  }

  ngOnInit(): void {
    this.notificationsList = [
      new NotificationsItemModel("assets/images/human/male-1.jpg", "marked the task as done", "a day ago", "Hiep Nguyen", false),
      new NotificationsItemModel("assets/images/human/female-1.jpg", "answered to your comment on the Cash Flow Forecast's graph", "20 minutes ago", "Maria", false),
      new NotificationsItemModel("assets/images/human/male-1.jpg", "marked the task as done", "a day ago", "Hiep Nguyen", false),
      new NotificationsItemModel("assets/images/human/female-1.jpg", "answered to your comment on the Cash Flow Forecast's graph", "20 minutes ago", "Maria", false), new NotificationsItemModel("assets/images/human/male-1.jpg", "marked the task as done", "a day ago", "Hiep Nguyen", false),
      new NotificationsItemModel("assets/images/human/female-1.jpg", "answered to your comment on the Cash Flow Forecast's graph", "20 minutes ago", "Maria", false),
      new NotificationsItemModel("assets/images/human/female-1.jpg", "answered to your comment on the Cash Flow Forecast's graph", "20 minutes ago", "Maria", false), new NotificationsItemModel("assets/images/human/male-1.jpg", "marked the task as done", "a day ago", "Hiep Nguyen", false),
      new NotificationsItemModel("assets/images/human/female-1.jpg", "answered to your comment on the Cash Flow Forecast's graph", "20 minutes ago", "Maria", false)
    ]
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


}
