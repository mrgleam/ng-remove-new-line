import * as i0 from '@angular/core';
import { forwardRef, Directive, HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

class RemoveNewLineDirective {
    constructor(elm, renderer) {
        this.elm = elm;
        this.renderer = renderer;
        this.isDisabled = false;
        this.onChangeFn = () => {
        };
        this.onTouchedFn = () => {
        };
    }
    onKeyDown(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    }
    onBlur(value) {
        this.onChangeFn(value.replace(/(?:\r\n|\r|\n)/g, ' '));
        this.onTouchedFn();
    }
    onPaste(event) {
        var _a;
        const clipboardData = event.clipboardData;
        const pastedDate = clipboardData === null || clipboardData === void 0 ? void 0 : clipboardData.getData('Text');
        const current = this.elm.nativeElement.value;
        this.onChangeFn((_a = current === null || current === void 0 ? void 0 : current.concat(pastedDate)) === null || _a === void 0 ? void 0 : _a.replace(/(?:\r\n|\r|\n)/g, ' '));
    }
    writeValue(value) {
        this.elm.nativeElement.value = value;
    }
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    registerOnTouched(fn) {
        this.onTouchedFn = fn;
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
        if (this.isDisabled) {
            this.renderer.setProperty(this.elm.nativeElement, 'disabled', 'disabled');
        }
        else {
            this.renderer.removeAttribute(this.elm.nativeElement, 'disabled');
        }
    }
}
RemoveNewLineDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: RemoveNewLineDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
RemoveNewLineDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.0.5", type: RemoveNewLineDirective, selector: "[removeNewLine]", host: { listeners: { "keydown": "onKeyDown($event)", "blur": "onBlur($event.target.value)", "paste": "onPaste($event)" } }, providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => RemoveNewLineDirective),
            multi: true
        }
    ], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: RemoveNewLineDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[removeNewLine]',
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => RemoveNewLineDirective),
                            multi: true
                        }
                    ],
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { onKeyDown: [{
                type: HostListener,
                args: ['keydown', ['$event']]
            }], onBlur: [{
                type: HostListener,
                args: ['blur', ['$event.target.value']]
            }], onPaste: [{
                type: HostListener,
                args: ['paste', ['$event']]
            }] } });

class RemoveNewLineModule {
}
RemoveNewLineModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: RemoveNewLineModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
RemoveNewLineModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: RemoveNewLineModule, declarations: [RemoveNewLineDirective], imports: [CommonModule], exports: [RemoveNewLineDirective] });
RemoveNewLineModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: RemoveNewLineModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: RemoveNewLineModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        RemoveNewLineDirective
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [RemoveNewLineDirective]
                }]
        }] });

/*
 * Public API Surface of ngx-remove-new-line
 */

/**
 * Generated bundle index. Do not edit.
 */

export { RemoveNewLineDirective, RemoveNewLineModule };
//# sourceMappingURL=ngx-remove-new-line.js.map
