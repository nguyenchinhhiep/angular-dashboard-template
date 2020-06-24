import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LanguageSelectorComponent implements OnInit {
  @HostBinding("class") classes = "language-selector";

  languages: any;
  selectedLanguage: any;

  constructor() {

    this.languages = [
      {
        id: 'EN',
        title: 'English',
        flag: 'en'
      },
      {
        id: 'VN',
        title: 'Tiếng Việt',
        flag: 'vi'
      }
    ];

   }

  ngOnInit(): void {

    this.selectedLanguage = this.languages[0];
   
  }

  onLanguageChange(index) {
    this.selectedLanguage = this.languages[index];
  }  
}
