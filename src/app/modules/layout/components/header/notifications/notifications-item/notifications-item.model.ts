export class NotificationsItemModel {
  id?: number;
  thumbnail: string;
  author: string;
  content: string;
  date: string;
  hasRead: boolean;
  
  constructor(thumbnail: string,content: string, date: string, author: string, hasRead: boolean){
    this.thumbnail = thumbnail;
    this.content = content;
    this.date = date;
    this.hasRead = hasRead;
    this.author = author
  }

  toggleRead() {
    this.hasRead = !this.hasRead;
  }

}