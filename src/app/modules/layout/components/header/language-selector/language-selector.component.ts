import { Component, OnInit, ViewEncapsulation, HostBinding, TemplateRef } from '@angular/core';
import { PopoverService } from 'src/app/shared/components/popover/popover.service';

@Component({
  selector: 'language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LanguageSelectorComponent implements OnInit {
  @HostBinding("class") classes = "language-selector-container";

  languages: Array<any>;
  selectedLanguage: any;

  constructor(private _popoverService: PopoverService) {
   }

  ngOnInit(): void {
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
    this.selectedLanguage = this.languages[0];
   
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

  onLanguageChange(index) {
    this.selectedLanguage = this.languages[index];
  }  
}
