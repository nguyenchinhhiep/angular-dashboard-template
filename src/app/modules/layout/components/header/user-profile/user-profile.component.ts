import { Component, OnInit, ViewEncapsulation, ViewChild, HostBinding, TemplateRef } from '@angular/core';
import { PopoverService } from 'src/app/shared/components/popover/popover.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserProfileComponent implements OnInit {
  @HostBinding("class") classes = "user-profile-container";

  constructor(private _popoverService: PopoverService) { }

  ngOnInit(): void {
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
}
