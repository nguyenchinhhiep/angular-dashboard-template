import { Component, OnInit, ViewEncapsulation, TemplateRef, HostBinding } from '@angular/core';
import { PopoverContent, PopoverRef } from './popover-ref';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopoverComponent implements OnInit {
  @HostBinding("class") classes = "popover-container border-secondary box-shadow-custom rounded border";
  renderMethod: 'template' | 'component' | 'text' = 'component';
  content: PopoverContent;
  context;

  constructor(private popoverRef: PopoverRef) {
  }

  ngOnInit() {
    this.content = this.popoverRef.content;

    if (typeof this.content === 'string') {
      this.renderMethod = 'text';
    }

    if (this.content instanceof TemplateRef) {
      this.renderMethod = 'template';
      this.context = {
        close: this.popoverRef.close.bind(this.popoverRef)
      }
    }
  }
}
