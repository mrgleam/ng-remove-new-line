import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[removeNewLine]'
})
export class RemoveNewLineDirective {

  constructor(
    private control: NgControl
  ) { }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }

  @HostListener('input', ['$event']) 
  onInputChange() {
    this.control.control?.setValue(this.control.control?.value.replace(/(?:\r\n|\r|\n)/g,' '));
  }
}
