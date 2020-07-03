export class NotificationsItemModel {
  id?: number;
  thumbnail: string;
  author: string;
  content: string;
  date: string;
  isRead: boolean;
  
  constructor(thumbnail: string,content: string, date: string, author: string, isRead: boolean){
    this.thumbnail = thumbnail;
    this.content = content;
    this.date = date;
    this.isRead = isRead;
    this.author = author
  }

  toggleRead() {
    this.isRead = !this.isRead;
  }

}