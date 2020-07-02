import { Injectable } from '@angular/core';
import { NotificationsItemModel } from './notifications-item/notifications-item.model';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class NotificationsService {
  private _notificationsList = [
    new NotificationsItemModel("assets/images/human/male-1.jpg", "marked the task as done", "a day ago", "Hiep Nguyen", false),
    new NotificationsItemModel("assets/images/human/female-1.jpg", "answered to your comment on the Cash Flow Forecast's graph", "20 minutes ago", "Maria", false),
    new NotificationsItemModel("assets/images/human/male-1.jpg", "marked the task as done", "a day ago", "Hiep Nguyen", false),
    new NotificationsItemModel("assets/images/human/female-1.jpg", "answered to your comment on the Cash Flow Forecast's graph", "20 minutes ago", "Maria", false), new NotificationsItemModel("assets/images/human/male-1.jpg", "marked the task as done", "a day ago", "Hiep Nguyen", false),
    new NotificationsItemModel("assets/images/human/female-1.jpg", "answered to your comment on the Cash Flow Forecast's graph", "20 minutes ago", "Maria", false),
    new NotificationsItemModel("assets/images/human/female-1.jpg", "answered to your comment on the Cash Flow Forecast's graph", "20 minutes ago", "Maria", false), new NotificationsItemModel("assets/images/human/male-1.jpg", "marked the task as done", "a day ago", "Hiep Nguyen", false),
    new NotificationsItemModel("assets/images/human/female-1.jpg", "answered to your comment on the Cash Flow Forecast's graph", "20 minutes ago", "Maria", false)
  ]

  private _notificationsList$: BehaviorSubject<NotificationsItemModel[]>;

  constructor() {
    this._notificationsList$ = new BehaviorSubject<NotificationsItemModel[]>(null);
    this._notificationsList$.next(this._notificationsList);
  }

  getNotifications(): Observable<NotificationsItemModel[]>
  {
    return this._notificationsList$.asObservable();
  }

  remove(item: NotificationsItemModel) {
    const index = this._notificationsList.indexOf(item);
    this._notificationsList.splice(index,1);
    this._notificationsList$.next(this._notificationsList);
  }

}