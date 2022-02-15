(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('ngx-remove-new-line', ['exports', '@angular/core', '@angular/common', '@angular/forms'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["ngx-remove-new-line"] = {}, global.ng.core, global.ng.common, global.ng.forms));
})(this, (function (exports, i0, common, forms) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var RemoveNewLineDirective = /** @class */ (function () {
        function RemoveNewLineDirective(elm, renderer) {
            this.elm = elm;
            this.renderer = renderer;
            this.isDisabled = false;
            this.onChangeFn = function () {
            };
            this.onTouchedFn = function () {
            };
        }
        RemoveNewLineDirective.prototype.onKeyDown = function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
            }
        };
        RemoveNewLineDirective.prototype.onBlur = function (value) {
            this.onChangeFn(value.replace(/(?:\r\n|\r|\n)/g, ' '));
            this.onTouchedFn();
        };
        RemoveNewLineDirective.prototype.onPaste = function (event) {
            var _a;
            var clipboardData = event.clipboardData;
            var pastedDate = clipboardData === null || clipboardData === void 0 ? void 0 : clipboardData.getData('Text');
            var current = this.elm.nativeElement.value;
            this.onChangeFn((_a = current === null || current === void 0 ? void 0 : current.concat(pastedDate)) === null || _a === void 0 ? void 0 : _a.replace(/(?:\r\n|\r|\n)/g, ' '));
        };
        RemoveNewLineDirective.prototype.writeValue = function (value) {
            this.elm.nativeElement.value = value;
        };
        RemoveNewLineDirective.prototype.registerOnChange = function (fn) {
            this.onChangeFn = fn;
        };
        RemoveNewLineDirective.prototype.registerOnTouched = function (fn) {
            this.onTouchedFn = fn;
        };
        RemoveNewLineDirective.prototype.setDisabledState = function (isDisabled) {
            this.isDisabled = isDisabled;
            if (this.isDisabled) {
                this.renderer.setProperty(this.elm.nativeElement, 'disabled', 'disabled');
            }
            else {
                this.renderer.removeAttribute(this.elm.nativeElement, 'disabled');
            }
        };
        return RemoveNewLineDirective;
    }());
    RemoveNewLineDirective.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: RemoveNewLineDirective, deps: [{ token: i0__namespace.ElementRef }, { token: i0__namespace.Renderer2 }], target: i0__namespace.ɵɵFactoryTarget.Directive });
    RemoveNewLineDirective.ɵdir = i0__namespace.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.0.5", type: RemoveNewLineDirective, selector: "[removeNewLine]", host: { listeners: { "keydown": "onKeyDown($event)", "blur": "onBlur($event.target.value)", "paste": "onPaste($event)" } }, providers: [
            {
                provide: forms.NG_VALUE_ACCESSOR,
                useExisting: i0.forwardRef(function () { return RemoveNewLineDirective; }),
                multi: true
            }
        ], ngImport: i0__namespace });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: RemoveNewLineDirective, decorators: [{
                type: i0.Directive,
                args: [{
                        selector: '[removeNewLine]',
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(function () { return RemoveNewLineDirective; }),
                                multi: true
                            }
                        ],
                    }]
            }], ctorParameters: function () { return [{ type: i0__namespace.ElementRef }, { type: i0__namespace.Renderer2 }]; }, propDecorators: { onKeyDown: [{
                    type: i0.HostListener,
                    args: ['keydown', ['$event']]
                }], onBlur: [{
                    type: i0.HostListener,
                    args: ['blur', ['$event.target.value']]
                }], onPaste: [{
                    type: i0.HostListener,
                    args: ['paste', ['$event']]
                }] } });

    var RemoveNewLineModule = /** @class */ (function () {
        function RemoveNewLineModule() {
        }
        return RemoveNewLineModule;
    }());
    RemoveNewLineModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: RemoveNewLineModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    RemoveNewLineModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: RemoveNewLineModule, declarations: [RemoveNewLineDirective], imports: [common.CommonModule], exports: [RemoveNewLineDirective] });
    RemoveNewLineModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: RemoveNewLineModule, imports: [[
                common.CommonModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: RemoveNewLineModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            RemoveNewLineDirective
                        ],
                        imports: [
                            common.CommonModule
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

    exports.RemoveNewLineDirective = RemoveNewLineDirective;
    exports.RemoveNewLineModule = RemoveNewLineModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-remove-new-line.umd.js.map
