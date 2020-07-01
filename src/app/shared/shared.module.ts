import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponents } from './components';





@NgModule({
  declarations: [...SharedComponents],
  imports: [
    CommonModule
  ],
  exports: [CommonModule]
})
export class SharedModule { }
