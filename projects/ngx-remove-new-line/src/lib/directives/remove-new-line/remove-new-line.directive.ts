import { Directive, ElementRef, forwardRef, HostListener, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[removeNewLine]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RemoveNewLineDirective),
      multi: true
    }
  ],
})
export class RemoveNewLineDirective implements ControlValueAccessor {
  private isDisabled = false;

  onChangeFn: (value: any) => void = () => {
  };

  onTouchedFn = () => {
  };

  constructor(
    private elm: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value: string) { 
    this.onChangeFn(value.replace(/(?:\r\n|\r|\n)/g,' '));
    this.onTouchedFn();
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    const clipboardData: DataTransfer | null = event.clipboardData;
    const pastedDate: string | undefined = clipboardData?.getData('Text');
    const current = this.elm.nativeElement.value;
    this.onChangeFn(current?.concat(pastedDate)?.replace(/(?:\r\n|\r|\n)/g,' '));
  }

  writeValue(value: string): void {
    this.elm.nativeElement.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouchedFn = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    if (this.isDisabled) {
      this.renderer.setProperty(this.elm.nativeElement, 'disabled', 'disabled');
    } else {
      this.renderer.removeAttribute(this.elm.nativeElement, 'disabled');
    }
  }
}
