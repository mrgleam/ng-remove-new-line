import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveNewLineDirective } from './remove-new-line.directive';



@NgModule({
  declarations: [
    RemoveNewLineDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [RemoveNewLineDirective]
})
export class RemoveNewLineModule { }
