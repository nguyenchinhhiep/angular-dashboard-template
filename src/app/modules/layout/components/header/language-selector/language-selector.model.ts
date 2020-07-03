export class LanguageSelectorModel {
  id: string;
  title: string;
  flag: string;

  constructor(id: string, title: string, flag: string) {
    this.id = id;
    this.title = title;
    this.flag = flag;
  }
}