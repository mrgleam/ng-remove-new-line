import { ElementRef, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class RemoveNewLineDirective implements ControlValueAccessor {
    private elm;
    private renderer;
    private isDisabled;
    onChangeFn: (value: any) => void;
    onTouchedFn: () => void;
    constructor(elm: ElementRef, renderer: Renderer2);
    onKeyDown(event: KeyboardEvent): void;
    onBlur(value: string): void;
    onPaste(event: ClipboardEvent): void;
    writeValue(value: string): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RemoveNewLineDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<RemoveNewLineDirective, "[removeNewLine]", never, {}, {}, never>;
}
