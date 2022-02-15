import { Directive, forwardRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
export class RemoveNewLineDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLW5ldy1saW5lLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1yZW1vdmUtbmV3LWxpbmUvc3JjL2xpYi9kaXJlY3RpdmVzL3JlbW92ZS1uZXctbGluZS9yZW1vdmUtbmV3LWxpbmUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsVUFBVSxFQUFFLFlBQVksRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUMzRixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBWXpFLE1BQU0sT0FBTyxzQkFBc0I7SUFTakMsWUFDVSxHQUFlLEVBQ2YsUUFBbUI7UUFEbkIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLGFBQVEsR0FBUixRQUFRLENBQVc7UUFWckIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUUzQixlQUFVLEdBQXlCLEdBQUcsRUFBRTtRQUN4QyxDQUFDLENBQUM7UUFFRixnQkFBVyxHQUFHLEdBQUcsRUFBRTtRQUNuQixDQUFDLENBQUM7SUFLRSxDQUFDO0lBR0wsU0FBUyxDQUFDLEtBQW9CO1FBQzVCLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxPQUFPLEVBQUU7WUFDekIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO0lBQ0gsQ0FBQztJQUdELE1BQU0sQ0FBQyxLQUFhO1FBQ2xCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBR0QsT0FBTyxDQUFDLEtBQXFCOztRQUMzQixNQUFNLGFBQWEsR0FBd0IsS0FBSyxDQUFDLGFBQWEsQ0FBQztRQUMvRCxNQUFNLFVBQVUsR0FBdUIsYUFBYSxhQUFiLGFBQWEsdUJBQWIsYUFBYSxDQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0RSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFBLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxNQUFNLENBQUMsVUFBVSxDQUFDLDBDQUFFLE9BQU8sQ0FBQyxpQkFBaUIsRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQy9FLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFPO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFjO1FBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFtQjtRQUNsQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQzNFO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsQ0FBQztTQUNuRTtJQUNILENBQUM7O21IQXREVSxzQkFBc0I7dUdBQXRCLHNCQUFzQixzS0FSdEI7UUFDVDtZQUNFLE9BQU8sRUFBRSxpQkFBaUI7WUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNyRCxLQUFLLEVBQUUsSUFBSTtTQUNaO0tBQ0Y7MkZBRVUsc0JBQXNCO2tCQVZsQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSx1QkFBdUIsQ0FBQzs0QkFDckQsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7eUhBZ0JDLFNBQVM7c0JBRFIsWUFBWTt1QkFBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBUW5DLE1BQU07c0JBREwsWUFBWTt1QkFBQyxNQUFNLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztnQkFPN0MsT0FBTztzQkFETixZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgSG9zdExpc3RlbmVyLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3JlbW92ZU5ld0xpbmVdJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSZW1vdmVOZXdMaW5lRGlyZWN0aXZlKSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBSZW1vdmVOZXdMaW5lRGlyZWN0aXZlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBwcml2YXRlIGlzRGlzYWJsZWQgPSBmYWxzZTtcblxuICBvbkNoYW5nZUZuOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHtcbiAgfTtcblxuICBvblRvdWNoZWRGbiA9ICgpID0+IHtcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsbTogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdibHVyJywgWyckZXZlbnQudGFyZ2V0LnZhbHVlJ10pXG4gIG9uQmx1cih2YWx1ZTogc3RyaW5nKSB7IFxuICAgIHRoaXMub25DaGFuZ2VGbih2YWx1ZS5yZXBsYWNlKC8oPzpcXHJcXG58XFxyfFxcbikvZywnICcpKTtcbiAgICB0aGlzLm9uVG91Y2hlZEZuKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdwYXN0ZScsIFsnJGV2ZW50J10pXG4gIG9uUGFzdGUoZXZlbnQ6IENsaXBib2FyZEV2ZW50KSB7XG4gICAgY29uc3QgY2xpcGJvYXJkRGF0YTogRGF0YVRyYW5zZmVyIHwgbnVsbCA9IGV2ZW50LmNsaXBib2FyZERhdGE7XG4gICAgY29uc3QgcGFzdGVkRGF0ZTogc3RyaW5nIHwgdW5kZWZpbmVkID0gY2xpcGJvYXJkRGF0YT8uZ2V0RGF0YSgnVGV4dCcpO1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICAgIHRoaXMub25DaGFuZ2VGbihjdXJyZW50Py5jb25jYXQocGFzdGVkRGF0ZSk/LnJlcGxhY2UoLyg/OlxcclxcbnxcXHJ8XFxuKS9nLCcgJykpO1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5lbG0ubmF0aXZlRWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogYW55KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZUZuID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkRm4gPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsbS5uYXRpdmVFbGVtZW50LCAnZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5lbG0ubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJyk7XG4gICAgfVxuICB9XG59XG4iXX0=