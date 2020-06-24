import { Component, OnInit, ViewEncapsulation, ViewChild, HostBinding } from '@angular/core';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserProfileComponent implements OnInit {
  @HostBinding("class") classes = "user-profile";

  constructor() { }

  ngOnInit(): void {
  }

}
